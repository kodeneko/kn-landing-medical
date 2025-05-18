import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  perfectionist.configs['recommended-natural'],
  { extends: ['js/recommended'], files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], plugins: { js } },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], languageOptions: { globals: globals.browser } },
  importPlugin.flatConfigs.recommended,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  stylistic.configs.recommended,
  reactHooks.configs['recommended-latest'],
  { files: ['**/*.{jsx,tsx}'],
    plugins: { pluginReact },
    settings: { react: { version: 'detect' } } },
  { rules: {
    '@stylistic/array-bracket-newline': ['error', { minItems: 4 }],
    // '@stylistic/curly-newline': ['error', { minElements: 4 }],
    '@stylistic/array-element-newline': ['error', { minItems: 4 }],
    '@stylistic/arrow-parens': ['error', 'as-needed'],
    '@stylistic/comma-dangle': ['error', 'never'],
    '@stylistic/comma-spacing': ['error', { after: true, before: false }],
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/jsx-indent': ['error', 2],
    '@stylistic/multiline-ternary': ['error', 'always-multiline'],
    '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    // '@stylistic/object-curly-newline': ['error', { minProperties: 4 }],
    '@stylistic/operator-linebreak': ['error', 'before'],
    '@stylistic/semi': ['error', 'always'],
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off'
  } }
]);
