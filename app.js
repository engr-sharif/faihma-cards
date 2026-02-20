const AppState = {
    authenticated: false,
    studyMode: 'course',
    currentSubject: 'course_ch34_diagnostic',
    currentCardIndex: 0,
    cards: [],
    filteredCards: [],
    showingAnswer: false,
    selectedChoice: null,
    shuffleMode: false,
    reviewMode: false,
    darkMode: false,
    subjectDrawerOpen: false,
    detailExpanded: { today: false, due: false, weak: false, trend: false },
    stats: {
        studyStreak: 0,
        sessionAccuracy: 0,
        sessionCorrect: 0,
        sessionTotal: 0,
        startTime: Date.now()
    },
    progress: {}
};

function authenticate() {
    const pin = document.getElementById('pinInput').value;
    const pinInput = document.getElementById('pinInput');
    const loginBtn = document.getElementById('loginBtn');
    if (pin === Config.CORRECT_PIN) {
        AppState.authenticated = true;
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('appContent').style.display = 'block';
        loadProgress();
        initializeApp();
    } else {
        pinInput.classList.add('error');
        pinInput.value = '';
        loginBtn.textContent = 'Try Again';
        setTimeout(() => {
            pinInput.classList.remove('error');
            loginBtn.textContent = 'Unlock';
        }, 2000);
    }
}

function initializeApp() {
    loadSubjectOptions();
    filterCards();
    renderCard();
    renderStats();
    updateDailyGoal();
    updateCoachPrompt();
    startStudyTimer();
}

function loadSubjectOptions() {
    const select = document.getElementById('subjectSelect');
    select.innerHTML = '';
    const options = AppState.studyMode === 'course' ? SubjectOptions.course : SubjectOptions.general;
    Object.entries(options).forEach(([value, label]) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = label;
        select.appendChild(option);
    });
    AppState.currentSubject = AppState.studyMode === 'course' ? 'course_ch34_diagnostic' : 'fundamentals';
    select.value = AppState.currentSubject;
}

function switchStudyMode(mode) {
    AppState.studyMode = mode;
    AppState.currentCardIndex = 0;
    AppState.showingAnswer = false;
    AppState.selectedChoice = null;
    document.getElementById('courseModeBtn').classList.toggle('active', mode === 'course');
    document.getElementById('generalModeBtn').classList.toggle('active', mode === 'general');
    loadSubjectOptions();
    filterCards();
    renderCard();
}

function sm2(progress, quality) {
    const q = [1, 2, 4, 5][quality] || 2;
    let ef = progress.easeFactor || 2.5;
    let interval = progress.interval || 0;
    let reps = progress.repetitions || 0;
    if (q < 3) {
        reps = 0;
        interval = quality === 0 ? 0.0007 : 0.002;
    } else {
        reps++;
        if (reps === 1) interval = 1;
        else if (reps === 2) interval = 3;
        else interval = Math.round(interval * ef);
        if (q === 5) interval = Math.round(interval * 1.3);
    }
    ef = Math.max(1.3, ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
    interval = Math.min(interval, 365);
    const now = Date.now();
    return { easeFactor: Math.round(ef * 100) / 100, interval, repetitions: reps, nextReview: now + interval * 86400000, lastReview: now };
}

function getCardKey(card) { return `${AppState.currentSubject}_${card.question.substring(0, 50)}`; }
function getCurrentCard() { return AppState.filteredCards[AppState.currentCardIndex]; }
function isDueCard(cardKey) { const p = AppState.progress[cardKey]; return !p || !p.nextReview || Date.now() >= p.nextReview; }

function filterCards() {
    AppState.cards = QuestionBank[AppState.currentSubject] || [];
    AppState.filteredCards = AppState.reviewMode
        ? AppState.cards.filter(card => (AppState.progress[getCardKey(card)] || {}).incorrect > 0)
        : [...AppState.cards];
    if (AppState.shuffleMode) AppState.filteredCards.sort(() => Math.random() - 0.5);
    AppState.currentCardIndex = Math.min(AppState.currentCardIndex, Math.max(0, AppState.filteredCards.length - 1));
    updateProgress();
}

function nextCard() {
    if (!AppState.filteredCards.length) return;
    AppState.currentCardIndex = AppState.currentCardIndex >= AppState.filteredCards.length - 1 ? 0 : AppState.currentCardIndex + 1;
    AppState.showingAnswer = false;
    AppState.selectedChoice = null;
    renderCard(true);
    updateProgress();
}

let toastTimer;
function showToast(msg, duration = 1800) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), duration);
}

function renderMasteryDots(card) {
    const container = document.getElementById('masteryIndicator');
    container.innerHTML = '';
    if (!card) return;
    const p = AppState.progress[getCardKey(card)] || {};
    const dots = 5;
    const filled = p.mastered ? dots : Math.min(dots, p.repetitions || 0);
    for (let i = 0; i < dots; i++) {
        const dot = document.createElement('span');
        dot.className = `mastery-dot ${i < filled ? 'filled' : ''}`;
        container.appendChild(dot);
    }
    const label = document.createElement('span');
    label.className = 'mastery-label';
    label.textContent = p.mastered ? 'Mastered ✨' : (p.studied ? `Learning · ${p.correct || 0}/${p.studied}` : 'New');
    container.appendChild(label);
}

function updateReviewBadge() {
    const count = (QuestionBank[AppState.currentSubject] || []).filter(c => (AppState.progress[getCardKey(c)] || {}).incorrect > 0).length;
    const badge = document.getElementById('reviewBadge');
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
}

function renderCard(animate) {
    const card = getCurrentCard();
    const container = document.querySelector('.flashcard-container');
    const populate = () => {
        if (!card) {
            document.getElementById('cardQuestion').textContent = AppState.reviewMode ? 'No missed cards yet. Great work 🎉' : 'No cards available for this subject.';
            document.getElementById('cardChoices').innerHTML = '<li class="empty-state">Try another subject or disable review filter.</li>';
            document.getElementById('cardExplanation').textContent = '';
            document.getElementById('masteryIndicator').innerHTML = '';
            return;
        }
        document.getElementById('cardQuestion').textContent = card.question;
        const choicesContainer = document.getElementById('cardChoices');
        choicesContainer.innerHTML = '';
        card.choices.forEach((choice, index) => {
            const li = document.createElement('li');
            li.className = 'card-choice';
            li.textContent = choice;
            li.setAttribute('data-key', index + 1);
            li.tabIndex = 0;
            li.addEventListener('click', () => selectChoice(index));
            li.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectChoice(index); }
            });
            choicesContainer.appendChild(li);
        });
        document.getElementById('cardExplanation').textContent = card.explanation;
        document.getElementById('cardHint').style.display = 'none';
        document.getElementById('cardHint').textContent = card.hint || '';
        document.getElementById('flashcard').classList.remove('flipped', 'shake');
        document.getElementById('answerButtons').style.display = 'none';
        renderMasteryDots(card);
        updateReviewBadge();
        updateProgress();
    };
    if (animate) {
        container.classList.add('slide-out');
        setTimeout(() => { container.classList.remove('slide-out'); populate(); container.classList.add('slide-in'); setTimeout(() => container.classList.remove('slide-in'), 350); }, 250);
    } else populate();
}

function selectChoice(choiceIndex) {
    if (AppState.showingAnswer || AppState.selectedChoice !== null) return;
    AppState.selectedChoice = choiceIndex;
    const card = getCurrentCard();
    const choices = document.querySelectorAll('.card-choice');
    if (!card) return;
    choices.forEach(el => el.style.pointerEvents = 'none');
    choices.forEach((choice, idx) => {
        if (idx === card.correct) choice.classList.add('correct');
        else if (idx === choiceIndex) choice.classList.add('incorrect');
    });
    setTimeout(showAnswer, choiceIndex === card.correct ? 550 : 1000);
}

function showAnswer() {
    AppState.showingAnswer = true;
    const card = getCurrentCard();
    const isCorrect = AppState.selectedChoice === card.correct;
    if (!isCorrect && card.hint) document.getElementById('cardHint').style.display = 'block';
    document.getElementById('flashcard').classList.add('flipped');
    setTimeout(() => {
        document.getElementById('answerButtons').style.display = 'flex';
        if (isCorrect) createSuccessParticles();
    }, 350);
    updateStats();
}

function updateStats() {
    const card = getCurrentCard();
    if (!card) return;
    const cardKey = getCardKey(card);
    if (!AppState.progress[cardKey]) AppState.progress[cardKey] = { correct: 0, incorrect: 0, studied: 0, mastered: false };
    const p = AppState.progress[cardKey];
    p.studied++;
    AppState.stats.sessionTotal++;
    if (AppState.selectedChoice === card.correct) {
        p.correct++;
        AppState.stats.sessionCorrect++;
    } else p.incorrect++;
    AppState.stats.sessionAccuracy = Math.round((AppState.stats.sessionCorrect / AppState.stats.sessionTotal) * 100);
    saveDailyCount();
    updateDailyGoal();
    updateCoachPrompt();
    saveProgress();
}

function handleAnswerButton(difficulty) {
    const card = getCurrentCard();
    if (!card) return;
    const key = getCardKey(card);
    if (!AppState.progress[key]) AppState.progress[key] = { correct: 0, incorrect: 0, studied: 0, mastered: false };
    const quality = { again: 0, hard: 1, good: 2, easy: 3 }[difficulty] ?? 2;
    const result = sm2(AppState.progress[key], quality);
    Object.assign(AppState.progress[key], result);
    if (difficulty === 'easy') {
        AppState.progress[key].mastered = true;
        showCelebration('✨ Mastery unlocked!');
    }
    saveProgress();
    renderStats();
    nextCard();
}

function renderStats() {
    const stats = computeDashboardData();
    document.getElementById('streakCount').textContent = AppState.stats.studyStreak || 0;

    document.getElementById('todaySummary').innerHTML = stats.todaySummary;
    document.getElementById('dueSummary').innerHTML = stats.dueSummary;
    document.getElementById('weakSummary').innerHTML = stats.weakSummary;
    document.getElementById('trendSummary').innerHTML = stats.trendSummary;
    document.getElementById('todayDetail').innerHTML = stats.todayDetail;
    document.getElementById('dueDetail').innerHTML = stats.dueDetail;
    document.getElementById('weakDetail').innerHTML = stats.weakDetail;
    document.getElementById('trendDetail').innerHTML = stats.trendDetail;

    ['today', 'due', 'weak', 'trend'].forEach(key => {
        document.getElementById(`${key}Detail`).classList.toggle('expanded', AppState.detailExpanded[key]);
    });
}

function computeDashboardData() {
    const now = Date.now();
    const totalStudied = Object.values(AppState.progress).reduce((sum, p) => sum + (p.studied || 0), 0);
    const mastered = Object.values(AppState.progress).filter(p => p.mastered).length;
    const dueNow = Object.values(AppState.progress).filter(p => !p.nextReview || p.nextReview <= now).length;
    const studyTimeMinutes = Math.floor((Date.now() - AppState.stats.startTime) / 60000);
    const allOptions = { ...SubjectOptions.course, ...SubjectOptions.general };

    const weakTopics = Object.entries(allOptions).map(([subject, label]) => {
        const cards = (QuestionBank[subject] || []);
        let correct = 0, total = 0;
        cards.forEach(card => {
            const p = AppState.progress[`${subject}_${card.question.substring(0, 50)}`];
            if (p) { correct += p.correct || 0; total += p.studied || 0; }
        });
        return { label, accuracy: total ? Math.round((correct / total) * 100) : null, total };
    }).filter(i => i.total > 0).sort((a, b) => a.accuracy - b.accuracy).slice(0, 3);

    const weekly = Array.from({ length: 7 }).map((_, i) => {
        const day = new Date(Date.now() - (6 - i) * 86400000).toDateString();
        const count = localStorage.getItem(`faihma_day_${day}`) || 0;
        return { label: new Date(day).toLocaleDateString(undefined, { weekday: 'short' }), count: Number(count) };
    });
    const bestDay = weekly.reduce((a, b) => b.count > a.count ? b : a, { label: '-', count: 0 });

    return {
        todaySummary: `<div class="kpi">${AppState.stats.sessionTotal}</div><p>answered today · ${AppState.stats.sessionAccuracy || 0}% accuracy</p>`,
        todayDetail: totalStudied ? `<p>Study time: ${studyTimeMinutes}m</p><p>Lifetime answers: ${totalStudied}</p><p>Mastered cards: ${mastered}</p>` : '<div class="empty-state">Start one card to unlock today insights.</div>',
        dueSummary: `<div class="kpi">${dueNow}</div><p>cards due now</p>`,
        dueDetail: dueNow ? `<p>${dueNow} cards are ready for review right now.</p>` : '<div class="success-state">Inbox zero 🎉 You are fully caught up.</div>',
        weakSummary: weakTopics.length ? weakTopics.map(t => `<div class="mini-row"><span>${t.label}</span><strong>${t.accuracy}%</strong></div>`).join('') : '<div class="empty-state">No weak areas yet — answer more cards first.</div>',
        weakDetail: weakTopics.length ? weakTopics.map(t => `<p>${t.label}: ${t.accuracy}% · ${t.total} attempts</p>`).join('') : '<div class="empty-state">Detailed weak-area drilldown will appear here.</div>',
        trendSummary: `<div class="mini-row"><span>Best day</span><strong>${bestDay.label} (${bestDay.count})</strong></div>`,
        trendDetail: `<div class="trend-bars">${weekly.map(d => `<div class="trend-col"><span style="height:${Math.max(6, d.count * 8)}px"></span><small>${d.label}</small></div>`).join('')}</div>`
    };
}

function updateCoachPrompt() {
    const weak = computeDashboardData().weakSummary;
    const strongest = Object.entries(AppState.progress).sort((a, b) => ((b[1].correct || 0) - (a[1].correct || 0)))[0];
    const strongestTopic = strongest ? strongest[0].split('_').slice(0, 2).join(' ') : 'new topics';
    const recommendation = weak.includes('mini-row') ? 'review your weakest subject now.' : 'build momentum with one fresh card.';
    document.getElementById('coachPrompt').textContent = `Coach: You’re strongest in ${strongestTopic}, ${recommendation}`;
}

function updateProgress() {
    const current = AppState.currentCardIndex + 1;
    const total = AppState.filteredCards.length;
    const percentage = total ? (current / total) * 100 : 0;
    const dueCount = (QuestionBank[AppState.currentSubject] || []).filter(c => isDueCard(getCardKey(c))).length;
    document.getElementById('progressText').textContent = total ? `Question ${current} of ${total} · ${dueCount} due` : 'No cards in this view';
    document.getElementById('accuracyText').textContent = `Accuracy: ${AppState.stats.sessionAccuracy || 0}%`;
    document.getElementById('progressFill').style.width = `${percentage}%`;
}

const DAILY_GOAL = 20;
function updateDailyGoal() {
    const today = new Date().toDateString();
    const total = Number(localStorage.getItem('faihma_daily_count_date') === today ? localStorage.getItem('faihma_daily_count') || 0 : 0) + (AppState.stats.sessionTotal || 0);
    const pct = Math.min(total / DAILY_GOAL, 1);
    const offset = 138.2 * (1 - pct);
    document.getElementById('goalRingFill').style.strokeDashoffset = offset;
    document.getElementById('goalRingText').textContent = `${Math.min(total, DAILY_GOAL)}/${DAILY_GOAL}`;
    if (total >= DAILY_GOAL) {
        document.getElementById('goalTitle').textContent = '🎉 Goal Complete!';
        document.getElementById('goalSubtitle').textContent = `${total} cards studied today — amazing!`;
    } else {
        document.getElementById('goalTitle').textContent = 'Daily Goal';
        document.getElementById('goalSubtitle').textContent = `${DAILY_GOAL - total} more cards to go`;
    }
}

function saveDailyCount() {
    const day = new Date().toDateString();
    const prev = localStorage.getItem('faihma_daily_count_date') === day ? Number(localStorage.getItem('faihma_daily_count') || 0) : 0;
    localStorage.setItem('faihma_daily_count', String(prev + 1));
    localStorage.setItem('faihma_daily_count_date', day);
    localStorage.setItem(`faihma_day_${day}`, String(prev + 1));
}

function saveProgress() {
    localStorage.setItem('faihma_nclex_progress', JSON.stringify({ progress: AppState.progress, stats: AppState.stats, lastStudyDate: new Date().toDateString() }));
}

function loadProgress() {
    const saved = localStorage.getItem('faihma_nclex_progress');
    if (saved) {
        const data = JSON.parse(saved);
        AppState.progress = data.progress || {};
        AppState.stats = { ...AppState.stats, ...data.stats };
        const lastStudyDate = data.lastStudyDate;
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        if (lastStudyDate === yesterday) AppState.stats.studyStreak = (AppState.stats.studyStreak || 0) + 1;
        else if (lastStudyDate !== today) AppState.stats.studyStreak = 1;
    }
    if (localStorage.getItem('faihma_dark_mode') === '1') {
        AppState.darkMode = true;
        document.body.setAttribute('data-theme', 'dark');
        document.getElementById('darkModeBtn').textContent = '☀️';
    }
    AppState.stats.startTime = Date.now();
}

function createSuccessParticles() { createParticleEffect(); }
function createParticleEffect() {
    const particles = document.getElementById('particles');
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random()}s`;
        particles.appendChild(particle);
        setTimeout(() => particle.remove(), 2800);
    }
}

function showCelebration(message) {
    showToast(message);
    for (let i = 0; i < 20; i++) {
        const c = document.createElement('div');
        c.className = 'confetti-piece';
        c.style.left = `${Math.random() * window.innerWidth}px`;
        c.style.top = `${window.innerHeight - 80}px`;
        c.style.background = ['#66bb6a', '#64b5f6', '#f06292'][i % 3];
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 1400);
    }
}

function startStudyTimer() { setInterval(renderStats, 60000); }
function toggleDarkMode() {
    AppState.darkMode = !AppState.darkMode;
    document.body.setAttribute('data-theme', AppState.darkMode ? 'dark' : '');
    document.getElementById('darkModeBtn').textContent = AppState.darkMode ? '☀️' : '🌙';
    localStorage.setItem('faihma_dark_mode', AppState.darkMode ? '1' : '0');
}
function toggleStats() { document.getElementById('statsDashboard').classList.toggle('active'); renderStats(); }
function logout() { AppState.authenticated = false; document.getElementById('loginScreen').style.display = 'flex'; document.getElementById('appContent').style.display = 'none'; document.getElementById('pinInput').value = ''; }

function toggleSubjectDrawer() {
    AppState.subjectDrawerOpen = !AppState.subjectDrawerOpen;
    const drawer = document.getElementById('subjectDrawer');
    drawer.classList.toggle('open', AppState.subjectDrawerOpen);
    drawer.setAttribute('aria-hidden', String(!AppState.subjectDrawerOpen));
}

function toggleQuickPalette(open = null) {
    const palette = document.getElementById('quickPalette');
    const shouldOpen = open === null ? !palette.classList.contains('open') : open;
    palette.classList.toggle('open', shouldOpen);
    palette.setAttribute('aria-hidden', String(!shouldOpen));
    if (shouldOpen) {
        document.getElementById('paletteSearch').focus();
        renderPaletteActions();
    }
}

function renderPaletteActions(query = '') {
    const container = document.getElementById('paletteActions');
    const q = query.toLowerCase().trim();
    const actions = [
        { label: 'Filter due cards', run: () => { AppState.reviewMode = true; filterCards(); renderCard(); } },
        { label: 'Show all cards', run: () => { AppState.reviewMode = false; filterCards(); renderCard(); } },
        { label: 'Jump to random card', run: () => { if (AppState.filteredCards.length) { AppState.currentCardIndex = Math.floor(Math.random() * AppState.filteredCards.length); renderCard(); updateProgress(); } } },
        ...Object.entries(AppState.studyMode === 'course' ? SubjectOptions.course : SubjectOptions.general).map(([value, label]) => ({
            label: `Jump subject: ${label}`,
            run: () => { AppState.currentSubject = value; document.getElementById('subjectSelect').value = value; filterCards(); renderCard(); }
        }))
    ].filter(a => !q || a.label.toLowerCase().includes(q));

    container.innerHTML = actions.length ? '' : '<div class="empty-state">No quick action matches.</div>';
    actions.slice(0, 10).forEach(action => {
        const btn = document.createElement('button');
        btn.className = 'palette-item';
        btn.textContent = action.label;
        btn.addEventListener('click', () => { action.run(); toggleQuickPalette(false); });
        container.appendChild(btn);
    });
}

function exportProgress() {
    const blob = new Blob([JSON.stringify({ progress: AppState.progress, stats: AppState.stats, exportDate: new Date().toISOString() }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `faihma-nclex-progress-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
}

function importProgress() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = e => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
            try {
                const data = JSON.parse(ev.target.result);
                AppState.progress = data.progress || {};
                AppState.stats = { ...AppState.stats, ...data.stats };
                saveProgress();
                renderStats();
                showToast('Progress imported');
            } catch {
                alert('Error importing progress file.');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginBtn').addEventListener('click', authenticate);
    document.getElementById('pinInput').addEventListener('keypress', e => e.key === 'Enter' && authenticate());
    document.getElementById('courseModeBtn').addEventListener('click', () => switchStudyMode('course'));
    document.getElementById('generalModeBtn').addEventListener('click', () => switchStudyMode('general'));
    document.getElementById('subjectSelect').addEventListener('change', e => { AppState.currentSubject = e.target.value; filterCards(); renderCard(); });

    document.getElementById('shuffleBtn').addEventListener('click', function () { AppState.shuffleMode = !AppState.shuffleMode; this.classList.toggle('active', AppState.shuffleMode); filterCards(); renderCard(); });
    document.getElementById('reviewBtn').addEventListener('click', function () { AppState.reviewMode = !AppState.reviewMode; this.classList.toggle('active', AppState.reviewMode); filterCards(); renderCard(); });
    document.getElementById('subjectDrawerBtn').addEventListener('click', toggleSubjectDrawer);
    document.getElementById('quickPaletteBtn').addEventListener('click', () => toggleQuickPalette());

    document.getElementById('againBtn').addEventListener('click', () => handleAnswerButton('again'));
    document.getElementById('hardBtn').addEventListener('click', () => handleAnswerButton('hard'));
    document.getElementById('goodBtn').addEventListener('click', () => handleAnswerButton('good'));
    document.getElementById('easyBtn').addEventListener('click', () => handleAnswerButton('easy'));
    document.getElementById('nextBtn').addEventListener('click', nextCard);

    document.getElementById('statsBtn').addEventListener('click', toggleStats);
    document.getElementById('darkModeBtn').addEventListener('click', toggleDarkMode);
    document.getElementById('logoutBtn').addEventListener('click', logout);

    document.querySelectorAll('[data-detail]').forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-detail');
            AppState.detailExpanded[key] = !AppState.detailExpanded[key];
            renderStats();
        });
    });

    document.getElementById('paletteSearch').addEventListener('input', e => renderPaletteActions(e.target.value));
    document.getElementById('quickPalette').addEventListener('click', e => { if (e.target.id === 'quickPalette') toggleQuickPalette(false); });

    document.addEventListener('keydown', e => {
        if (!AppState.authenticated) return;
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); toggleQuickPalette(true); return; }
        if (e.key === 'Escape') { toggleQuickPalette(false); return; }
        if (e.key === 's') toggleSubjectDrawer();
        if (['1','2','3','4'].includes(e.key) && !AppState.showingAnswer) selectChoice(Number(e.key) - 1);
        if (e.key === 'a' && AppState.showingAnswer) handleAnswerButton('again');
        if (e.key === 'h' && AppState.showingAnswer) handleAnswerButton('hard');
        if (e.key === 'g' && AppState.showingAnswer) handleAnswerButton('good');
        if (e.key === 'e' && AppState.showingAnswer) handleAnswerButton('easy');
        if (e.key === 'ArrowRight') nextCard();
    });

    document.getElementById('flashcard').addEventListener('click', e => {
        if (!e.target.closest('.card-choice') && !AppState.showingAnswer && AppState.selectedChoice === null) {
            document.getElementById('flashcard').classList.toggle('flipped');
        }
    });
});
