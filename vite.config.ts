/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  css: { preprocessorOptions: { less: { paths: [path.resolve(__dirname, 'src/assets/styles'), path.resolve(__dirname, 'src/assets/pics'), path.resolve(__dirname, 'node_modules')] } } },
  plugins: [react()],
  resolve: { alias: {
    '@': path.resolve(__dirname, './src'),
    '@assets': path.resolve(__dirname, './src/assets'),
    '@components': path.resolve(__dirname, './src/components'),
    '@globals': path.resolve(__dirname, './src/globals'),
    '@hooks': path.resolve(__dirname, './src/hooks'),
    '@i18n': path.resolve(__dirname, './src/i18n'),
    '@layouts': path.resolve(__dirname, './src/layouts'),
    '@models': path.resolve(__dirname, './src/models'),
    '@pages': path.resolve(__dirname, './src/pages'),
    '@services': path.resolve(__dirname, './src/services'),
    '@store': path.resolve(__dirname, './src/store'),
    '@utils': path.resolve(__dirname, './src/utils')
  } },
  test: { environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setupTests.ts' }
});
