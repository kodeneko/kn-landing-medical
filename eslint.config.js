import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import stylisticJsx from '@stylistic/eslint-plugin-jsx';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import parserTs from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortKeys from 'eslint-plugin-sort-keys';
import globals from 'globals';
import tseslint from 'typescript-eslint';
// Import pluginPrettierRec from "eslint-plugin-prettier/recommended";


export default [


  // Javascript
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
      'sort-keys': sortKeys
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'sort-imports': 'off',
      'sort-keys': 'error',
      'sort-keys/sort-keys-fix': 'error'
    }
  },

  // Typescript
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
      'sort-keys': sortKeys
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'sort-imports': 'off',
      'sort-keys': 'error',
      'sort-keys/sort-keys-fix': 'error'
    }
  },

  // Stylistic js
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      ...stylisticJs.configs['all-flat'].rules,
      '@stylistic/js/indent': [
        'error',
        2
      ],
      '@stylistic/js/quote-props': [
        'error',
        'as-needed'
      ],
      '@stylistic/js/quotes': [
        'error',
        'single'
      ]
    }
  },

  // Stylistic ts
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: parserTs
    },
    plugins: {
      '@stylistic/ts': stylisticTs
    },
    rules: {
      ...stylisticTs.configs['all-flat'].rules,
      '@stylistic/ts/indent': [
        'error',
        2
      ],
      '@stylistic/ts/quote-props': [
        'error',
        'as-needed'
      ],
      '@stylistic/ts/quotes': [
        'error',
        'single'
      ]
    }

  },

  // Stylistic jsx
  {
    ...stylisticJsx.configs['all-flat'],
    rules: {
      '@stylistic/jsx/jsx-indent': [
        2,
        2
      ],
      '@stylistic/jsx/jsx-indent-props': [
        2,
        2
      ],
      '@stylistic/jsx/jsx-max-props-per-line': [
        1,
        {maximum: 2}
      ],
      '@stylistic/jsx/jsx-one-expression-per-line': [
        1,
        {allow: 'literal'}
      ]
    }
  },

  /*
   * // Prettier
   *  {
   *    ...pluginPrettierRec,
   *    rules: {
   *
   *    },
   *  },
   */

  // React
  {
    ...pluginReact.configs.flat.all,
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parser: parserTs,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  },


  // React Hooks
  {
    plugins: {
      'react-hooks': pluginReactHooks
    },
    rules: {
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error'
    }
  },

  // React Refresh
  {
    plugins: {
      'react-refresh': reactRefresh
    },
    rules: {
      'react-refresh/only-export-components': 'warn'
    }
  }
];
