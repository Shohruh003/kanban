import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import { resolve } from 'path';
import fg from 'fast-glob';

export const root = normalizePath(resolve(__dirname, '..', 'src', 'products'))

export const productCodes = fg.sync('*', { cwd: root, onlyDirectories: true });

export default defineConfig({
    root,
    publicDir: resolve(__dirname, '..', 'public'),
    resolve: {
        alias: {
            '/core': resolve(__dirname, '..', 'src', 'core'),
            '/hooks': resolve(__dirname, '..', 'src', 'hooks'),
            '/components': resolve(__dirname, '..', 'src', 'components'),
            '/pages': resolve(__dirname, '..', 'src', 'pages'),
            '/stores': resolve(__dirname, '..', 'src', 'stores'),
            '/utils': resolve(__dirname, '..', 'src', 'utils')
        }
    },
    plugins: [
        react(),
        checker({ typescript: true })
    ]
})