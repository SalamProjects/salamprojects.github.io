import eslintPluginAstro from 'eslint-plugin-astro';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  ...svelte.configs['flat/recommended'],
  prettier,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelte.parser,
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
];
