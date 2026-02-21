        // ==== APP STATE ====
        const AppState = {
            authenticated: false,
            studyMode: 'course', // 'course' or 'general'
            currentSubject: 'course_ch34_diagnostic',
            currentCardIndex: 0,
            cards: [],
            filteredCards: [],
            showingAnswer: false,
            selectedChoice: null,
            shuffleMode: false,
            reviewMode: false,
            darkMode: false,
            stats: {
                totalCards: 0,
                masteredCards: 0,
                studyStreak: 0,
                sessionAccuracy: 0,
                sessionCorrect: 0,
                sessionTotal: 0,
                studyTime: 0,
                startTime: Date.now(),
                weakestTopic: 'fundamentals'
            },
            progress: {},
            user: null,
            quickUnlocked: false,
            pendingSync: false
        };

        let supabaseClient = null;
        let encryptionKeyPromise = null;


        // ==== QUESTION DATA ====

        // ==== AUTHENTICATION ====

        async function initBackend() {
            if (supabaseClient || !window.supabase) return;
            if (!Config.BACKEND.supabaseUrl || Config.BACKEND.supabaseUrl.includes('YOUR_PROJECT')) return;
            try {
                supabaseClient = window.supabase.createClient(Config.BACKEND.supabaseUrl, Config.BACKEND.supabaseAnonKey);
            } catch (error) {
                console.warn('Supabase init failed', error);
            }
        }

        function setAuthStatus(message, isError) {
            const status = document.getElementById('authStatus');
            status.textContent = message || '';
            status.style.color = isError ? 'var(--error-red)' : 'var(--text-light)';
        }

        async function authenticate() {
            const email = document.getElementById('authEmail').value.trim();
            const password = document.getElementById('authPassword').value;
            if (!email || !password) {
                setAuthStatus('Enter email and password.', true);
                return;
            }

            await initBackend();
            if (!supabaseClient) {
                setAuthStatus('Supabase is not configured. Update config.js first.', true);
                return;
            }

            const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
            if (error || !data?.user) {
                setAuthStatus(error?.message || 'Sign-in failed.', true);
                return;
            }
            await completeLogin(data.user, 'Signed in successfully.');
        }

        async function signUp() {
            const email = document.getElementById('authEmail').value.trim();
            const password = document.getElementById('authPassword').value;
            if (!email || !password) {
                setAuthStatus('Enter email and password.', true);
                return;
            }
            await initBackend();
            if (!supabaseClient) return setAuthStatus('Supabase is not configured.', true);

            const { error } = await supabaseClient.auth.signUp({ email, password });
            if (error) return setAuthStatus(error.message, true);
            setAuthStatus('Account created. Check your email for confirmation.');
        }

        async function sendRecoveryEmail() {
            const email = document.getElementById('authEmail').value.trim();
            if (!email) return setAuthStatus('Enter your email first.', true);
            await initBackend();
            if (!supabaseClient) return setAuthStatus('Supabase is not configured.', true);
            const { error } = await supabaseClient.auth.resetPasswordForEmail(email);
            if (error) return setAuthStatus(error.message, true);
            setAuthStatus('Recovery email sent. Continue on this or another device after reset.');
        }

        async function signInWithPasskey() {
            setAuthStatus('Passkey flow requires backend WebAuthn challenge endpoints. Configure in Supabase edge functions.');
        }

        async function registerPasskey() {
            setAuthStatus('Register passkey after login via your backend WebAuthn flow.');
        }

        async function quickUnlock() {
            const pin = document.getElementById('pinInput').value;
            const storedHash = localStorage.getItem(Config.STORAGE_KEYS.QUICK_PIN_HASH);
            if (!storedHash) return setAuthStatus('Set a quick PIN after signing in once.', true);
            const hash = await hashText(pin);
            if (hash !== storedHash) return setAuthStatus('Invalid quick PIN.', true);

            const cachedSession = localStorage.getItem(Config.STORAGE_KEYS.QUICK_UNLOCK_TOKEN);
            if (cachedSession) {
                AppState.user = JSON.parse(cachedSession);
                await completeLogin(AppState.user, 'Quick-unlocked local encrypted cache.');
            } else {
                setAuthStatus('No cached account on this device. Use full sign-in once.', true);
            }
        }

        async function setQuickPin() {
            const pin = document.getElementById('pinInput').value;
            if (!/^\d{4}$/.test(pin)) return setAuthStatus('PIN must be 4 digits.', true);
            localStorage.setItem(Config.STORAGE_KEYS.QUICK_PIN_HASH, await hashText(pin));
            setAuthStatus('Quick PIN saved on this device.');
        }

        async function completeLogin(user, statusMessage) {
            AppState.authenticated = true;
            AppState.user = user;
            localStorage.setItem(Config.STORAGE_KEYS.QUICK_UNLOCK_TOKEN, JSON.stringify({ id: user.id, email: user.email }));
            document.getElementById('loginScreen').style.display = 'none';
            document.getElementById('appContent').style.display = 'block';
            await loadProgress();
            initializeApp();
            createParticleEffect();
            setAuthStatus(statusMessage || 'Ready.');
            setupNetworkListeners();
            replayQueuedWrites();
        }

        function switchAuthTab(tab) {
            const panels = {
                email: 'emailAuthPanel',
                passkey: 'passkeyAuthPanel',
                quick: 'quickUnlockPanel'
            };
            Object.entries(panels).forEach(([key, id]) => {
                document.getElementById(id).style.display = key === tab ? 'block' : 'none';
            });
            document.getElementById('emailTabBtn').classList.toggle('active', tab === 'email');
            document.getElementById('passkeyTabBtn').classList.toggle('active', tab === 'passkey');
            document.getElementById('quickUnlockTabBtn').classList.toggle('active', tab === 'quick');
        }

        // ==== INITIALIZATION ====
        function initializeApp() {
            loadSubjectOptions();
            filterCards();
            renderCard();
            renderStats();
            updateDailyGoal();
            startStudyTimer();
        }

        function loadSubjectOptions() {
            const select = document.getElementById('subjectSelect');
            select.innerHTML = '';
            
            const options = AppState.studyMode === 'course' ? SubjectOptions.course : SubjectOptions.general;
            
            for (const [value, label] of Object.entries(options)) {
                const option = document.createElement('option');
                option.value = value;
                option.textContent = label;
                select.appendChild(option);
            }
            
            // Set default subject based on mode
            if (AppState.studyMode === 'course') {
                AppState.currentSubject = 'course_ch34_diagnostic';
            } else {
                AppState.currentSubject = 'fundamentals';
            }
            
            select.value = AppState.currentSubject;
        }

        function switchStudyMode(mode) {
            AppState.studyMode = mode;
            AppState.currentCardIndex = 0;
            AppState.showingAnswer = false;
            AppState.selectedChoice = null;
            
            // Update mode button states
            document.getElementById('courseModeBtn').classList.toggle('active', mode === 'course');
            document.getElementById('generalModeBtn').classList.toggle('active', mode === 'general');
            
            // Load appropriate subject options
            loadSubjectOptions();
            filterCards();
            renderCard();
        }

        // ==== SM-2 SPACED REPETITION ENGINE ====
        // Based on SuperMemo SM-2 with Leitner-inspired short intervals
        function sm2(progress, quality) {
            // quality: 0 = Again, 1 = Hard, 2 = Good, 3 = Easy (mapped from 0-5 SM-2 scale)
            // Map to SM-2 quality: Again→1, Hard→2, Good→4, Easy→5
            const q = [1, 2, 4, 5][quality] || 2;

            let ef = progress.easeFactor || 2.5;
            let interval = progress.interval || 0;
            let reps = progress.repetitions || 0;

            if (q < 3) {
                // Failed — reset to beginning with short interval
                reps = 0;
                interval = quality === 0 ? 1 : 3; // Again: 1 min, Hard: 3 min (in minutes for first steps)
                // Store as fraction of a day for first learning steps
                interval = quality === 0 ? 0.0007 : 0.002; // ~1 min / ~3 min in days
            } else {
                // Passed
                reps++;
                if (reps === 1) {
                    interval = 1; // 1 day
                } else if (reps === 2) {
                    interval = 3; // 3 days (Leitner-inspired graduated interval)
                } else {
                    interval = Math.round(interval * ef);
                }

                // Easy bonus: 30% longer interval
                if (q === 5) {
                    interval = Math.round(interval * 1.3);
                }
            }

            // Update ease factor (SM-2 formula)
            ef = ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
            ef = Math.max(1.3, ef); // Floor at 1.3

            // Cap interval at 365 days
            interval = Math.min(interval, 365);

            const now = Date.now();
            return {
                easeFactor: Math.round(ef * 100) / 100,
                interval: interval,
                repetitions: reps,
                nextReview: now + interval * 86400000, // Convert days to ms
                lastReview: now
            };
        }

        function isDueCard(cardKey) {
            const p = AppState.progress[cardKey];
            if (!p || !p.nextReview) return true; // New card = due
            return Date.now() >= p.nextReview;
        }

        function cardSortPriority(card) {
            const key = getCardKey(card);
            const p = AppState.progress[key];
            if (!p || !p.nextReview) return 0; // New cards: highest priority
            const overdue = Date.now() - p.nextReview;
            if (overdue >= 0) return 1; // Due/overdue: second priority (more overdue = shown sooner within group)
            return 2; // Future: lowest priority
        }

        function getDueCount(subjectKey) {
            const cards = QuestionBank[subjectKey] || [];
            return cards.filter(card => {
                const key = `${subjectKey}_${card.question.substring(0, 50)}`;
                return isDueCard(key);
            }).length;
        }

        // ==== CARD MANAGEMENT ====
        function filterCards() {
            AppState.cards = QuestionBank[AppState.currentSubject] || [];
            
            if (AppState.reviewMode) {
                AppState.filteredCards = AppState.cards.filter(card => {
                    const cardKey = getCardKey(card);
                    return AppState.progress[cardKey] && AppState.progress[cardKey].incorrect > 0;
                });
            } else {
                AppState.filteredCards = [...AppState.cards];
            }

            if (AppState.shuffleMode) {
                shuffleArray(AppState.filteredCards);
            } else {
                // SRS smart sort: due/overdue first, then new, then future
                AppState.filteredCards.sort((a, b) => {
                    const pa = cardSortPriority(a);
                    const pb = cardSortPriority(b);
                    if (pa !== pb) return pa - pb;
                    // Within due cards, most overdue first
                    if (pa === 1) {
                        const ka = getCardKey(a), kb = getCardKey(b);
                        return (AppState.progress[ka].nextReview || 0) - (AppState.progress[kb].nextReview || 0);
                    }
                    return 0;
                });
            }

            AppState.currentCardIndex = 0;
            updateProgress();
        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function getCardKey(card) {
            return `${AppState.currentSubject}_${card.question.substring(0, 50)}`;
        }

        function getCurrentCard() {
            return AppState.filteredCards[AppState.currentCardIndex];
        }

        function nextCard() {
            const wasLast = AppState.currentCardIndex >= AppState.filteredCards.length - 1;
            if (wasLast) {
                AppState.currentCardIndex = 0;
                showToast('🔁 Deck complete! Starting over…');
            } else {
                AppState.currentCardIndex++;
            }
            
            AppState.showingAnswer = false;
            AppState.selectedChoice = null;
            renderCard(true);
            updateProgress();
        }

        // ==== TOAST ====
        let _toastTimer = null;
        function showToast(msg, durationMs) {
            durationMs = durationMs || 2000;
            const el = document.getElementById('toast');
            el.textContent = msg;
            el.classList.add('show');
            clearTimeout(_toastTimer);
            _toastTimer = setTimeout(() => el.classList.remove('show'), durationMs);
        }

        // ==== MASTERY DOTS ====
        function renderMasteryDots(card) {
            const container = document.getElementById('masteryIndicator');
            container.innerHTML = '';
            if (!card) return;
            const cardKey = getCardKey(card);
            const p = AppState.progress[cardKey];
            const correct = p ? p.correct : 0;
            const studied = p ? p.studied : 0;
            const mastered = p && p.mastered;
            const reps = p ? (p.repetitions || 0) : 0;
            const interval = p ? (p.interval || 0) : 0;
            const dots = 5;
            // Dots based on SRS level: reps count progression
            const filled = mastered ? dots : Math.min(dots, reps);
            for (let i = 0; i < dots; i++) {
                const dot = document.createElement('span');
                dot.className = 'mastery-dot' + (i < filled ? ' filled' : '');
                container.appendChild(dot);
            }
            const label = document.createElement('span');
            label.className = 'mastery-label';
            if (mastered) {
                label.textContent = 'Mastered ✨';
            } else if (reps > 0 && interval > 0) {
                const intervalText = interval < 1 ? '<1d' : Math.round(interval) + 'd';
                label.textContent = `Level ${reps} · ${intervalText} interval`;
            } else if (studied > 0) {
                label.textContent = `Learning · ${correct}/${studied}`;
            } else {
                label.textContent = 'New';
            }
            container.appendChild(label);
        }

        // ==== REVIEW BADGE ====
        function updateReviewBadge() {
            let count = 0;
            const currentCards = QuestionBank[AppState.currentSubject] || [];
            currentCards.forEach(card => {
                const key = getCardKey(card);
                if (AppState.progress[key] && AppState.progress[key].incorrect > 0) count++;
            });
            const badge = document.getElementById('reviewBadge');
            if (count > 0) {
                badge.textContent = count;
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        }

        // ==== RENDERING ====
        function renderCard(animate) {
            const card = getCurrentCard();
            if (!card) {
                document.getElementById('cardQuestion').textContent = 'No cards available for this subject or filter.';
                document.getElementById('cardChoices').innerHTML = '';
                document.getElementById('cardExplanation').textContent = '';
                document.getElementById('cardHint').style.display = 'none';
                document.getElementById('masteryIndicator').innerHTML = '';
                return;
            }

            const container = document.querySelector('.flashcard-container');

            function populateCard() {
                document.getElementById('cardQuestion').textContent = card.question;
                
                const choicesContainer = document.getElementById('cardChoices');
                choicesContainer.innerHTML = '';
                
                card.choices.forEach((choice, index) => {
                    const li = document.createElement('li');
                    li.className = 'card-choice';
                    li.textContent = choice;
                    li.setAttribute('data-key', (index + 1));
                    li.addEventListener('click', () => selectChoice(index));
                    choicesContainer.appendChild(li);
                });

                document.getElementById('cardExplanation').textContent = card.explanation;
                
                const hintElement = document.getElementById('cardHint');
                hintElement.textContent = card.hint || '';
                hintElement.style.display = 'none';

                const flashcard = document.getElementById('flashcard');
                flashcard.classList.remove('flipped', 'shake');
                flashcard.style.transform = '';
                document.getElementById('answerButtons').style.display = 'none';
                document.getElementById('nextButton').style.display = 'none';
                
                AppState.selectedChoice = null;
                AppState.showingAnswer = false;

                renderMasteryDots(card);
                updateReviewBadge();
                updateProgress();
            }

            if (animate) {
                container.classList.add('slide-out');
                setTimeout(() => {
                    container.classList.remove('slide-out');
                    populateCard();
                    container.classList.add('slide-in');
                    setTimeout(() => container.classList.remove('slide-in'), 400);
                }, 300);
            } else {
                populateCard();
            }
        }

        function selectChoice(choiceIndex) {
            if (AppState.showingAnswer || AppState.selectedChoice !== null) return;

            AppState.selectedChoice = choiceIndex;
            const card = getCurrentCard();
            const choices = document.querySelectorAll('.card-choice');
            
            // Mark selected and disable all choices
            choices[choiceIndex].classList.add('selected');
            choices.forEach(choice => { choice.style.pointerEvents = 'none'; });
            
            // Show correct/incorrect immediately
            choices.forEach((choice, index) => {
                if (index === card.correct) {
                    choice.classList.add('correct');
                } else if (index === choiceIndex && index !== card.correct) {
                    choice.classList.add('incorrect');
                }
            });

            const isCorrect = choiceIndex === card.correct;
            const flashcard = document.getElementById('flashcard');
            flashcard.classList.add(isCorrect ? 'correct-flash' : 'incorrect-flash');
            setTimeout(() => flashcard.classList.remove('correct-flash', 'incorrect-flash'), 700);
            
            if (!isCorrect) {
                // Wrong: shake first, then flip after delay
                document.getElementById('flashcard').classList.add('shake');
                setTimeout(() => {
                    document.getElementById('flashcard').classList.remove('shake');
                }, 600);
                setTimeout(() => {
                    showAnswer();
                }, 1500);
            } else {
                // Correct: brief pause then flip
                setTimeout(() => {
                    showAnswer();
                }, 600);
            }
        }

        function showAnswer() {
            AppState.showingAnswer = true;
            const card = getCurrentCard();
            const isCorrect = AppState.selectedChoice === card.correct;

            // Show hint on back face if wrong
            if (!isCorrect && card.hint) {
                document.getElementById('cardHint').style.display = 'block';
            }

            // Flip to show explanation
            document.getElementById('flashcard').classList.add('flipped');
            
            // Show answer rating buttons with interval previews
            setTimeout(() => {
                const cardKey = getCardKey(card);
                const p = AppState.progress[cardKey] || {};
                const btnIds = ['againBtn', 'hardBtn', 'goodBtn', 'easyBtn'];
                const emojis = ['🔄', '😤', '👍', '⚡'];
                const names = ['Again', 'Hard', 'Good', 'Easy'];
                for (let i = 0; i < 4; i++) {
                    const preview = sm2({...p}, i);
                    const iv = preview.interval;
                    const ivText = iv < 0.01 ? '1m' : iv < 0.05 ? '3m' : iv < 1 ? Math.round(iv*24)+'h' : iv === 1 ? '1d' : Math.round(iv)+'d';
                    document.getElementById(btnIds[i]).innerHTML = `${emojis[i]} ${names[i]}<br><small style="opacity:0.8;font-size:0.75em">${ivText}</small>`;
                }
                const answerBtns = document.getElementById('answerButtons');
                answerBtns.style.display = 'flex';
                answerBtns.classList.remove('animate-in');
                void answerBtns.offsetWidth; // force reflow
                answerBtns.classList.add('animate-in');
                if (isCorrect) {
                    createSuccessParticles();
                }
            }, 500);

            // Update statistics
            updateStats();
        }

        // ==== STATISTICS ====
        function updateStats() {
            const card = getCurrentCard();
            const cardKey = getCardKey(card);
            
            if (!AppState.progress[cardKey]) {
                AppState.progress[cardKey] = { correct: 0, incorrect: 0, studied: 0 };
            }
            
            AppState.progress[cardKey].studied++;
            AppState.stats.sessionTotal++;
            
            if (AppState.selectedChoice === card.correct) {
                AppState.progress[cardKey].correct++;
                AppState.stats.sessionCorrect++;
            } else {
                AppState.progress[cardKey].incorrect++;
            }
            
            updateSessionAccuracy();
            saveDailyCount();
            updateDailyGoal();
            saveProgress();
        }

        function handleAnswerButton(difficulty) {
            const cardKey = getCardKey(getCurrentCard());
            if (!AppState.progress[cardKey]) {
                AppState.progress[cardKey] = { correct: 0, incorrect: 0, studied: 0, mastered: false };
            }
            
            // Map difficulty to quality: again=0, hard=1, good=2, easy=3
            const qualityMap = { again: 0, hard: 1, good: 2, easy: 3 };
            const quality = qualityMap[difficulty] ?? 2;

            // Run SM-2 algorithm
            const srsResult = sm2(AppState.progress[cardKey], quality);
            Object.assign(AppState.progress[cardKey], srsResult);

            // Friendly labels
            const intervalLabel = srsResult.interval < 0.01 ? '~1 min' :
                                  srsResult.interval < 0.05 ? '~3 min' :
                                  srsResult.interval < 1 ? Math.round(srsResult.interval * 24) + 'h' :
                                  srsResult.interval === 1 ? '1 day' :
                                  Math.round(srsResult.interval) + ' days';

            switch(difficulty) {
                case 'easy':
                    AppState.progress[cardKey].mastered = true;
                    showToast(`⚡ Mastered! Next in ${intervalLabel}`);
                    break;
                case 'good':
                    showToast(`👍 Nice! Next in ${intervalLabel}`, 1500);
                    break;
                case 'hard':
                    AppState.progress[cardKey].needsReview = true;
                    showToast(`💪 Next in ${intervalLabel}`, 1500);
                    break;
                case 'again':
                    AppState.progress[cardKey].incorrect++;
                    showToast('🔄 Coming back soon!', 1500);
                    break;
            }
            
            saveProgress();
            nextCard();
        }

        function updateSessionAccuracy() {
            if (AppState.stats.sessionTotal > 0) {
                AppState.stats.sessionAccuracy = Math.round(
                    (AppState.stats.sessionCorrect / AppState.stats.sessionTotal) * 100
                );
            } else {
                AppState.stats.sessionAccuracy = 0;
            }
        }

        function renderStats() {
            const totalStudied = Object.keys(AppState.progress).length;
            const masteredCards = Object.values(AppState.progress).filter(p => p.mastered).length;
            const studyTimeMinutes = Math.floor((Date.now() - AppState.stats.startTime) / 60000);
            
            // Count cards in SRS stages
            const now = Date.now();
            let dueNow = 0, learning = 0, mature = 0;
            Object.values(AppState.progress).forEach(p => {
                if (!p.nextReview || now >= p.nextReview) dueNow++;
                if ((p.repetitions || 0) >= 3 && (p.interval || 0) >= 21) mature++;
                else if ((p.repetitions || 0) > 0) learning++;
            });

            document.getElementById('totalCards').textContent = totalStudied;
            document.getElementById('masteredCards').textContent = masteredCards;
            document.getElementById('studyStreak').textContent = AppState.stats.studyStreak || 0;
            document.getElementById('sessionAccuracy').textContent = AppState.stats.sessionAccuracy + '%';
            document.getElementById('studyTime').textContent = studyTimeMinutes + 'm';
            document.getElementById('streakCount').textContent = AppState.stats.studyStreak || 0;

            // Calculate weakest topic
            const allOptions = { ...SubjectOptions.course, ...SubjectOptions.general };
            let worstSubject = '-';
            let worstRate = Infinity;
            const subjectStats = {};

            for (const [subjectKey, label] of Object.entries(allOptions)) {
                const cards = QuestionBank[subjectKey] || [];
                if (cards.length === 0) continue;
                let correct = 0, total = 0;
                cards.forEach(card => {
                    const key = `${subjectKey}_${card.question.substring(0, 50)}`;
                    const p = AppState.progress[key];
                    if (p && p.studied > 0) {
                        correct += p.correct;
                        total += p.studied;
                    }
                });
                const rate = total > 0 ? correct / total : -1;
                subjectStats[subjectKey] = { label, correct, total, cardCount: cards.length, rate };
                if (total > 0 && rate < worstRate) {
                    worstRate = rate;
                    worstSubject = label.length > 12 ? label.substring(0, 12) + '…' : label;
                }
            }
            document.getElementById('weakestTopic').textContent = worstSubject;

            // Subject mastery bars
            const masteryList = document.getElementById('subjectMasteryList');
            masteryList.innerHTML = '<h3>📈 Subject Mastery</h3>';
            const currentOptions = AppState.studyMode === 'course' ? SubjectOptions.course : SubjectOptions.general;
            for (const [key, label] of Object.entries(currentOptions)) {
                const s = subjectStats[key];
                if (!s) continue;
                const pct = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
                const bar = document.createElement('div');
                bar.className = 'subject-bar';
                bar.innerHTML = `<span class="subject-bar-label">${label}</span>
                    <div class="subject-bar-track"><div class="subject-bar-fill" style="width:${pct}%;${pct >= 80 ? 'background:linear-gradient(90deg,#66bb6a,#43a047)' : pct < 50 && s.total > 0 ? 'background:linear-gradient(90deg,#ef5350,#e53935)' : ''}"></div></div>
                    <span class="subject-bar-pct">${s.total > 0 ? pct + '%' : '—'}</span>`;
                masteryList.appendChild(bar);
            }
        }

        function updateProgress() {
            const current = AppState.currentCardIndex + 1;
            const total = AppState.filteredCards.length;
            const percentage = total > 0 ? (current / total) * 100 : 0;
            const dueCount = getDueCount(AppState.currentSubject);
            
            const dueLabel = dueCount > 0 ? ` · ${dueCount} due` : ' · All caught up! ✨';
            document.getElementById('progressText').textContent = `Question ${current} of ${total}${dueLabel}`;
            document.getElementById('accuracyText').textContent = `Accuracy: ${AppState.stats.sessionAccuracy}%`;
            document.getElementById('progressFill').style.width = percentage + '%';
        }

        // ==== DAILY GOAL ====
        const DAILY_GOAL = 20;
        function updateDailyGoal() {
            const today = new Date().toDateString();
            const todayCount = AppState.stats.sessionTotal || 0;
            // Also count from saved progress for today
            let savedToday = parseInt(localStorage.getItem(Config.STORAGE_KEYS.DAILY_COUNT_DATE) === today ? localStorage.getItem(Config.STORAGE_KEYS.DAILY_COUNT) || '0' : '0');
            const total = savedToday + todayCount;
            const pct = Math.min(total / DAILY_GOAL, 1);
            const circumference = 138.2;
            const offset = circumference * (1 - pct);
            
            const ring = document.getElementById('goalRingFill');
            const text = document.getElementById('goalRingText');
            const subtitle = document.getElementById('goalSubtitle');
            const title = document.getElementById('goalTitle');
            
            if (ring) ring.style.strokeDashoffset = offset;
            if (text) text.textContent = `${Math.min(total, DAILY_GOAL)}/${DAILY_GOAL}`;
            
            if (total >= DAILY_GOAL) {
                if (title) title.textContent = '🎉 Goal Complete!';
                if (subtitle) subtitle.textContent = `${total} cards studied today — amazing!`;
                if (ring) ring.style.stroke = 'var(--success-green)';
            } else {
                if (title) title.textContent = 'Daily Goal';
                if (subtitle) subtitle.textContent = `${DAILY_GOAL - total} more cards to go`;
                if (ring) ring.style.stroke = 'var(--primary-teal)';
            }
        }
        
        function saveDailyCount() {
            const today = new Date().toDateString();
            const prev = localStorage.getItem(Config.STORAGE_KEYS.DAILY_COUNT_DATE) === today ? 
                parseInt(localStorage.getItem(Config.STORAGE_KEYS.DAILY_COUNT) || '0') : 0;
            localStorage.setItem(Config.STORAGE_KEYS.DAILY_COUNT, prev + 1);
            localStorage.setItem(Config.STORAGE_KEYS.DAILY_COUNT_DATE, today);
        }

        // ==== PERSISTENCE ====
        async function getEncryptionKey() {
            if (encryptionKeyPromise) return encryptionKeyPromise;
            const saltKey = Config.STORAGE_KEYS.CACHE_KEY_SALT;
            let salt = localStorage.getItem(saltKey);
            if (!salt) {
                salt = crypto.randomUUID();
                localStorage.setItem(saltKey, salt);
            }
            const userMaterial = `${AppState.user?.id || 'guest'}:${salt}`;
            const baseKey = await crypto.subtle.importKey('raw', new TextEncoder().encode(userMaterial), 'PBKDF2', false, ['deriveKey']);
            encryptionKeyPromise = crypto.subtle.deriveKey(
                { name: 'PBKDF2', salt: new TextEncoder().encode(salt), iterations: Config.SECURITY.PBKDF2_ITERATIONS, hash: 'SHA-256' },
                baseKey,
                { name: 'AES-GCM', length: 256 },
                false,
                ['encrypt', 'decrypt']
            );
            return encryptionKeyPromise;
        }

        async function encryptPayload(payload) {
            const iv = crypto.getRandomValues(new Uint8Array(Config.SECURITY.AES_GCM_IV_LENGTH));
            const key = await getEncryptionKey();
            const plaintext = new TextEncoder().encode(JSON.stringify(payload));
            const ciphertext = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, plaintext);
            return { iv: Array.from(iv), data: Array.from(new Uint8Array(ciphertext)) };
        }

        async function decryptPayload(blob) {
            if (!blob?.data || !blob?.iv) return null;
            try {
                const key = await getEncryptionKey();
                const plain = await crypto.subtle.decrypt(
                    { name: 'AES-GCM', iv: new Uint8Array(blob.iv) },
                    key,
                    new Uint8Array(blob.data)
                );
                return JSON.parse(new TextDecoder().decode(plain));
            } catch (error) {
                console.warn('Unable to decrypt cache', error);
                return null;
            }
        }

        function queueWrite(action, payload) {
            const queue = JSON.parse(localStorage.getItem(Config.STORAGE_KEYS.WRITE_QUEUE) || '[]');
            queue.push({ action, payload, ts: Date.now() });
            localStorage.setItem(Config.STORAGE_KEYS.WRITE_QUEUE, JSON.stringify(queue));
        }

        async function replayQueuedWrites() {
            if (!navigator.onLine || !supabaseClient || !AppState.user) return;
            const queue = JSON.parse(localStorage.getItem(Config.STORAGE_KEYS.WRITE_QUEUE) || '[]');
            if (!queue.length) return;

            const remaining = [];
            for (const item of queue) {
                try {
                    await remoteUpsert(item.payload);
                } catch (error) {
                    remaining.push(item);
                }
            }
            localStorage.setItem(Config.STORAGE_KEYS.WRITE_QUEUE, JSON.stringify(remaining));
        }

        function setupNetworkListeners() {
            window.addEventListener('online', replayQueuedWrites);
        }

        async function remoteUpsert(state) {
            if (!supabaseClient || !AppState.user) return;
            const payload = {
                user_id: AppState.user.id,
                progress: state.progress,
                stats: state.stats,
                settings: { darkMode: AppState.darkMode },
                updated_at: new Date().toISOString()
            };
            const { error } = await supabaseClient.from(Config.BACKEND.tables.progress).upsert(payload, { onConflict: 'user_id' });
            if (error) throw error;
        }

        async function saveProgress() {
            const data = {
                progress: AppState.progress,
                stats: AppState.stats,
                lastStudyDate: new Date().toDateString(),
                updated_at: new Date().toISOString()
            };
            localStorage.setItem(Config.STORAGE_KEYS.PROGRESS, JSON.stringify(await encryptPayload(data)));
            if (navigator.onLine) {
                try {
                    await remoteUpsert(data);
                } catch (_error) {
                    queueWrite('upsert_progress', data);
                }
            } else {
                queueWrite('upsert_progress', data);
            }
        }

        async function loadProgress() {
            const saved = localStorage.getItem(Config.STORAGE_KEYS.PROGRESS);
            if (saved) {
                const decrypted = await decryptPayload(JSON.parse(saved));
                if (decrypted) {
                    AppState.progress = decrypted.progress || {};
                    AppState.stats = { ...AppState.stats, ...decrypted.stats };
                    AppState.lastUpdatedAt = decrypted.updated_at;
                }
            }

            if (supabaseClient && AppState.user && navigator.onLine) {
                const { data } = await supabaseClient
                    .from(Config.BACKEND.tables.progress)
                    .select('*')
                    .eq('user_id', AppState.user.id)
                    .maybeSingle();

                if (data) {
                    const remoteTs = new Date(data.updated_at || 0).getTime();
                    const localTs = new Date(AppState.lastUpdatedAt || 0).getTime();
                    if (remoteTs > localTs) {
                        AppState.progress = data.progress || {};
                        AppState.stats = { ...AppState.stats, ...(data.stats || {}) };
                    } else if (localTs > remoteTs) {
                        await remoteUpsert({ progress: AppState.progress, stats: AppState.stats });
                    }
                }
            }

            AppState.stats.startTime = Date.now();

            if (localStorage.getItem(Config.STORAGE_KEYS.DARK_MODE) === '1') {
                AppState.darkMode = true;
                document.body.setAttribute('data-theme', 'dark');
                document.getElementById('darkModeBtn').textContent = '☀️';
            }
        }

        async function hashText(text) {
            const bytes = new TextEncoder().encode(text);
            const digest = await crypto.subtle.digest('SHA-256', bytes);
            return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, '0')).join('');
        }

        // ==== UTILITIES ====
        function createParticleEffect() {
            const particles = document.getElementById('particles');
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.animationDelay = Math.random() * 3 + 's';
                    particles.appendChild(particle);
                    
                    setTimeout(() => {
                        particle.remove();
                    }, 3000);
                }, i * 200);
            }
        }

        function createSuccessParticles() {
            createParticleEffect();
        }

        function startStudyTimer() {
            setInterval(() => {
                renderStats();
            }, 60000); // Update every minute
        }

        function toggleDarkMode() {
            AppState.darkMode = !AppState.darkMode;
            document.body.setAttribute('data-theme', AppState.darkMode ? 'dark' : '');
            document.getElementById('darkModeBtn').textContent = AppState.darkMode ? '☀️' : '🌙';
            localStorage.setItem(Config.STORAGE_KEYS.DARK_MODE, AppState.darkMode ? '1' : '0');
            saveProgress();
        }

        function toggleStats() {
            const dashboard = document.getElementById('statsDashboard');
            const btn = document.getElementById('statsBtn');
            dashboard.classList.toggle('active');
            btn.textContent = dashboard.classList.contains('active') ? '📊' : '📊';
            renderStats();
        }

        async function logout() {
            AppState.authenticated = false;
            AppState.user = null;
            if (supabaseClient) await supabaseClient.auth.signOut();
            document.getElementById('loginScreen').style.display = 'flex';
            document.getElementById('appContent').style.display = 'none';
            document.getElementById('pinInput').value = '';
            setAuthStatus('Signed out.');
        }

        async function exportProgress() {
            const data = {
                progress: AppState.progress,
                stats: AppState.stats,
                exportDate: new Date().toISOString(),
                userId: AppState.user?.id || null
            };
            const secret = localStorage.getItem(Config.STORAGE_KEYS.EXPORT_SIGNING_SECRET) || crypto.randomUUID();
            localStorage.setItem(Config.STORAGE_KEYS.EXPORT_SIGNING_SECRET, secret);
            const signature = await hashText(JSON.stringify(data) + secret);
            const blob = new Blob([JSON.stringify({ data, signature, algo: 'sha256' }, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `faihma-nclex-progress-${new Date().toISOString().split('T')[0]}.json`;
            a.click();
            URL.revokeObjectURL(url);
        }

        function importProgress() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = async (e) => {
                        try {
                            const imported = JSON.parse(e.target.result);
                            const secret = localStorage.getItem(Config.STORAGE_KEYS.EXPORT_SIGNING_SECRET) || '';
                            const container = imported.data ? imported : { data: imported, signature: null };
                            if (container.signature) {
                                const actual = await hashText(JSON.stringify(container.data) + secret);
                                if (actual !== container.signature) {
                                    alert('Invalid signature. Import blocked.');
                                    return;
                                }
                            }
                            const data = container.data;
                            AppState.progress = data.progress || {};
                            AppState.stats = { ...AppState.stats, ...data.stats };
                            saveProgress();
                            renderStats();
                            alert('Progress imported successfully!');
                        } catch (error) {
                            alert('Error importing progress file. Please check the file format.');
                        }
                    };
                    reader.readAsText(file);
                }
            };
            input.click();
        }

        // ==== EVENT LISTENERS ====
        document.addEventListener('DOMContentLoaded', function() {
            // Login
            document.getElementById('loginBtn').addEventListener('click', () => authenticate());
            document.getElementById('signupBtn').addEventListener('click', () => signUp());
            document.getElementById('sendRecoveryBtn').addEventListener('click', () => sendRecoveryEmail());
            document.getElementById('passkeyLoginBtn').addEventListener('click', () => signInWithPasskey());
            document.getElementById('registerPasskeyBtn').addEventListener('click', () => registerPasskey());
            document.getElementById('quickUnlockBtn').addEventListener('click', () => quickUnlock());
            document.getElementById('setQuickPinBtn').addEventListener('click', () => setQuickPin());
            document.getElementById('emailTabBtn').addEventListener('click', () => switchAuthTab('email'));
            document.getElementById('passkeyTabBtn').addEventListener('click', () => switchAuthTab('passkey'));
            document.getElementById('quickUnlockTabBtn').addEventListener('click', () => switchAuthTab('quick'));
            document.getElementById('authPassword').addEventListener('keypress', function(e) { if (e.key === 'Enter') authenticate(); });
            document.getElementById('pinInput').addEventListener('keypress', function(e) { if (e.key === 'Enter') quickUnlock(); });

            // Mode toggle
            document.getElementById('courseModeBtn').addEventListener('click', () => switchStudyMode('course'));
            document.getElementById('generalModeBtn').addEventListener('click', () => switchStudyMode('general'));

            // Controls
            document.getElementById('subjectSelect').addEventListener('change', function(e) {
                AppState.currentSubject = e.target.value;
                filterCards();
                renderCard();
            });

            document.getElementById('shuffleBtn').addEventListener('click', function() {
                AppState.shuffleMode = !AppState.shuffleMode;
                this.classList.toggle('active', AppState.shuffleMode);
                filterCards();
                renderCard();
            });

            document.getElementById('reviewBtn').addEventListener('click', function() {
                AppState.reviewMode = !AppState.reviewMode;
                this.classList.toggle('active', AppState.reviewMode);
                filterCards();
                renderCard();
            });

            // Answer buttons
            document.getElementById('againBtn').addEventListener('click', () => handleAnswerButton('again'));
            document.getElementById('hardBtn').addEventListener('click', () => handleAnswerButton('hard'));
            document.getElementById('goodBtn').addEventListener('click', () => handleAnswerButton('good'));
            document.getElementById('easyBtn').addEventListener('click', () => handleAnswerButton('easy'));
            document.getElementById('nextBtn').addEventListener('click', nextCard);

            // Header buttons
            document.getElementById('statsBtn').addEventListener('click', toggleStats);
            document.getElementById('darkModeBtn').addEventListener('click', toggleDarkMode);
            document.getElementById('logoutBtn').addEventListener('click', logout);

            // Keyboard shortcuts
            document.addEventListener('keydown', function(e) {
                if (!AppState.authenticated) return;
                
                switch(e.key) {
                    case ' ':
                        e.preventDefault();
                        if (AppState.showingAnswer) {
                            nextCard();
                        } else {
                            document.getElementById('flashcard').click();
                        }
                        break;
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                        if (!AppState.showingAnswer) {
                            selectChoice(parseInt(e.key) - 1);
                        }
                        break;
                    case 'a':
                        if (AppState.showingAnswer) handleAnswerButton('again');
                        break;
                    case 'h':
                        if (AppState.showingAnswer) handleAnswerButton('hard');
                        break;
                    case 'g':
                        if (AppState.showingAnswer) handleAnswerButton('good');
                        break;
                    case 'e':
                        if (AppState.showingAnswer) handleAnswerButton('easy');
                        break;
                    case 'Escape':
                        toggleStats();
                        break;
                }
            });

            // Card flip on click — only if clicking card itself, not choices
            document.getElementById('flashcard').addEventListener('click', function(e) {
                if (e.target.closest('.card-choice')) return;
                if (!AppState.showingAnswer && AppState.selectedChoice === null) {
                    this.classList.toggle('flipped');
                }
            });
        });
