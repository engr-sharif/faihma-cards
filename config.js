// Configuration settings for Faihma's NCLEX Flashcards

const Config = {
    // Authentication
    CORRECT_PIN: "0214",
    
    // App metadata
    APP_NAME: "Faihma's NCLEX Flashcards",
    VERSION: "2.0.0",
    
    // Storage keys
    STORAGE_KEYS: {
        PROGRESS: 'faihmaFlashcardsProgress',
        SETTINGS: 'faihmaFlashcardsSettings',
        STATS: 'faihmaFlashcardsStats'
    },
    
    // Default settings
    DEFAULT_SETTINGS: {
        showHints: true,
        showExplanations: true,
        shuffleCards: true,
        darkTheme: false,
        soundEnabled: false
    },
    
    // Subject display names and options
    SUBJECT_OPTIONS: {
        course: {
            'course_ch34_diagnostic': 'Ch 34: Diagnostic Tests',
            'course_ch41_urinary': 'Ch 41: Urinary Elimination', 
            'course_ch41_vocab': 'Ch 41: Vocab & Definitions',
            'course_ch40_bowel': 'Ch 40: Bowel Elimination'
        }
    },
    
    // Spaced repetition algorithm settings
    SRS_SETTINGS: {
        DEFAULT_EASE_FACTOR: 2.5,
        MIN_EASE_FACTOR: 1.3,
        EASE_FACTOR_ADJUSTMENT: {
            0: -0.8,  // again
            1: -0.54, // hard  
            2: 0,     // good
            3: 0.15   // easy
        },
        QUALITY_THRESHOLDS: [1, 2, 4, 5]
    },
    
    // UI settings
    UI_SETTINGS: {
        MAX_CARDS_PER_SESSION: 20,
        REVIEW_BATCH_SIZE: 10,
        AUTO_ADVANCE_DELAY: 1500,
        ANIMATION_DURATION: 300
    },
    
    // Performance thresholds
    MASTERY_THRESHOLDS: {
        MASTERED_INTERVAL: 21, // days
        MIN_REVIEWS: 3,
        SUCCESS_RATE: 0.8
    }
};

// Validation function for config
function validateConfig() {
    const warnings = [];
    
    if (!Config.CORRECT_PIN || Config.CORRECT_PIN.length !== 4) {
        warnings.push('PIN must be exactly 4 characters');
    }
    
    if (!Config.SUBJECT_OPTIONS.course || Object.keys(Config.SUBJECT_OPTIONS.course).length === 0) {
        warnings.push('No course subjects configured');
    }
    
    if (warnings.length > 0) {
        console.warn('Config validation warnings:');
        warnings.forEach(warning => console.warn('⚠️', warning));
    }
    
    return warnings.length === 0;
}

// Validate config on load
validateConfig();