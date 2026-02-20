import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  { ignores: ['dist/**', 'node_modules/**', 'coverage/**'] },
  eslint.configs.recommended,
  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },
  {
    files: ['app.js', 'config.js', 'flashcards.js'],
    languageOptions: {
      sourceType: 'script',
      globals: {
        ...globals.browser
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'no-redeclare': 'off',
      'no-undef': 'off'
    }
  },
  prettier
];
