import { defineConfig, normalizePath, loadEnv, mergeConfig, splitVendorChunkPlugin } from "vite";
import { resolve } from 'path';
import defaultViteConfig, { productCodes, root } from "./default.vite.config";
import viteCompression from 'vite-plugin-compression';

const outDir = normalizePath(resolve(__dirname, '..', 'dist'));
const entires: Record<string, string> = {};

productCodes.forEach(product => {
    entires[product] = normalizePath(resolve(root, product, 'index.html'));
});

export default defineConfig(({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return mergeConfig(defaultViteConfig, {
        build: {
            outDir,
            rollupOptions: {
                input: entires,
                treeshake: true,
                output: {
                    entryFileNames: '[name]/bundle[hash].js',
                    chunkFileNames: 'bundles/[name][hash].js',
                    assetFileNames: 'bundles/assets/[name].[ext]',
                    manualChunks: undefined
                }
            }
        },
        plugins: [
            viteCompression(),
            splitVendorChunkPlugin()
        ]
    });
});
