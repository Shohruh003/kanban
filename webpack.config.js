const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const fg = require('fast-glob');

const EnvFiles = {
    development: 'env.dev'
}

module.exports = (env) => {
    const envPath = () => {
        let envFile;
        Object.keys(env).forEach(envName => {
            if (EnvFiles[envName]) {
                envFile = envName
            }
        });
        return EnvFiles[envFile];
    }

    const dotenv = require('dotenv').config({
        path: __dirname + '/' + envPath()
    });

    const productCodes = ['academy'];
    const entries = {
        academy: path.join(__dirname, 'src', 'products', 'academy', 'academy-init.tsx')
    };

    productCodes.forEach(productCode => {
        entries[productCode] = path.join(__dirname, 'src', 'products', productCode, `${productCode}-init.tsx`);
    });

    const htmlFiles = productCodes.map(productCode => new HtmlWebpackPlugin({
        filename: path.join(__dirname, 'dist', productCode, 'index.html'),
        template: path.join(__dirname, 'index.html'),
        templateParameters: { productCode },
        chunks: [productCode, 'vendor']
    }))

    return {
        entry: entries,
        mode: 'none',
        target: "web",
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            alias: {
                '/core': path.resolve(__dirname, 'src', 'core'),
                '/hooks': path.resolve(__dirname, 'src', 'hooks'),
                '/pages': path.resolve(__dirname, 'src', 'pages'),
                '/stores': path.resolve(__dirname, 'src', 'stores'),
                '/components': path.resolve(__dirname, 'src', 'components'),
                'cldr$': 'cldrjs',
                'cldr': 'cldrjs/dist/cldr'
            }
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)?$/,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            allowTsInNodeModules: true
                        }
                    }
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    use: {
                        loader: 'file-loader'
                    }
                }
            ]
        },
        output: {
            publicPath: "/",
            path: path.resolve(__dirname, "dist"),
            filename: "[name]/[name].[chunkhash].bundle.js",
            chunkFilename: '[name].[chunkhash].bundle.js'
        },
        plugins: [
            new webpack.DefinePlugin({ 'process.env.product': JSON.stringify(env.product) }),
            new webpack.ProvidePlugin({ process: 'process/browser' }),
            new webpack.EnvironmentPlugin(Object.keys(dotenv.parsed || {})),
            new CompressionPlugin(),
            new CopyPlugin({ patterns: [{ from: 'public', to: 'public' }] }),
        ].concat(htmlFiles)
    };
}