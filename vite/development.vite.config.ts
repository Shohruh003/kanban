import { defineConfig, loadEnv, ViteDevServer, mergeConfig } from 'vite';
import defaultViteConfig, { productCodes } from './default.vite.config';

const customApiFallback = (rewrites: Array<{ from: RegExp, to: string }>) => ({
    name: 'cutom-api-fallback',
    configureServer(server: ViteDevServer) {
        server.middlewares.use((req, res, next) => {
            if (req.method === 'GET' && (req.originalUrl || '').length > 1 && !req.originalUrl?.match(/\..*$/)) {
                rewrites.forEach(rewrite => {
                    if (req.originalUrl?.match(rewrite.from)) {
                        req.url = rewrite.to
                    }
                })
            }
            next()
        });
    }
});

const rewrites = productCodes.map(product => ({
    from: new RegExp(`^\/${product}\/?.*`),
    to: `/${product}/`
}));

export default defineConfig(({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return mergeConfig(defaultViteConfig, {
        server: {
            port: 80,
            proxy: {
                '/academy/api': {
                    target: process.env.VITE_FACEIDS_API_URL,
                    secure: false,
                    changeOrigin: true
                }
            }
        },
        plugins: [
            customApiFallback(rewrites)
        ]
    });
});