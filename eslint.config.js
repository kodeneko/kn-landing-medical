import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'
import reactHooks from 'eslint-plugin-react-hooks'

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  stylistic.configs.recommended,
  reactHooks.configs['recommended-latest'],
  { plugins: { pluginReact },
    files: ['**/*.{jsx,tsx}'],
    settings: { react: { version: 'detect' } } },
  { rules: {
    'react/react-in-jsx-scope': 'off',
    '@stylistic/indent': ['error', 2],
    '@stylistic/jsx-indent': ['error', 2],
    // '@stylistic/curly-newline': ['error', { minElements: 4 }],
    '@stylistic/array-element-newline': ['error', { minItems: 4 }],
    '@stylistic/array-bracket-newline': ['error', { minItems: 4 }],
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    '@stylistic/object-curly-newline': ['error', { minProperties: 4 }],
    '@stylistic/operator-linebreak': ['error', 'before'],
    '@stylistic/arrow-parens': ['error', 'as-needed'],
    '@stylistic/comma-dangle': ['error', 'never'],
    '@stylistic/comma-spacing': ['error', { before: false, after: true }],
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/multiline-ternary': ['error', 'always-multiline']
  } }
])
