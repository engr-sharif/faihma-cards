// Configuration settings for Faihma's NCLEX Flashcards

const Config = {
    // Backend platform (Supabase)
    BACKEND: {
        provider: 'supabase',
        supabaseUrl: 'https://YOUR_PROJECT.supabase.co',
        supabaseAnonKey: 'YOUR_PUBLIC_ANON_KEY',
        tables: {
            profiles: 'profiles',
            progress: 'user_progress',
            settings: 'user_settings'
        }
    },

    // App metadata
    APP_NAME: "Faihma's NCLEX Flashcards",
    VERSION: "3.0.0",

    // Storage keys
    STORAGE_KEYS: {
        PROGRESS: 'faihma_nclex_progress',
        WRITE_QUEUE: 'faihma_write_queue',
        QUICK_PIN_HASH: 'faihma_quick_pin_hash',
        QUICK_UNLOCK_TOKEN: 'faihma_quick_unlock_token',
        CACHE_KEY_SALT: 'faihma_cache_key_salt',
        EXPORT_SIGNING_SECRET: 'faihma_export_signing_secret',
        DARK_MODE: 'faihma_dark_mode',
        DAILY_COUNT: 'faihma_daily_count',
        DAILY_COUNT_DATE: 'faihma_daily_count_date'
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

    // Security settings
    SECURITY: {
        PBKDF2_ITERATIONS: 120000,
        AES_GCM_IV_LENGTH: 12,
        PIN_LENGTH: 4
    }
};

function validateConfig() {
    const warnings = [];

    if (!Config.BACKEND.supabaseUrl || Config.BACKEND.supabaseUrl.includes('YOUR_PROJECT')) {
        warnings.push('Set Config.BACKEND.supabaseUrl to your Supabase project URL.');
    }

    if (!Config.BACKEND.supabaseAnonKey || Config.BACKEND.supabaseAnonKey.includes('YOUR_PUBLIC_ANON_KEY')) {
        warnings.push('Set Config.BACKEND.supabaseAnonKey to your Supabase anon key.');
    }

    if (warnings.length > 0) {
        console.warn('Config validation warnings:');
        warnings.forEach((warning) => console.warn('⚠️', warning));
    }

    return warnings.length === 0;
}

validateConfig();
