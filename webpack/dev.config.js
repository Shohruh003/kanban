const { merge } = require('webpack-merge');
const baseConfig = require('../webpack.config');
const fg = require('fast-glob');

const productCodes = fg.sync('*', { cwd: `${__dirname}/../src/products/`, onlyDirectories: true });

module.exports = (...rest) => merge(baseConfig(...rest), {
    devtool: 'eval-cheap-source-map',
    devServer: {
        port: 80,
        // open: rest.open,
        open: true,
        historyApiFallback: {
            rewrites: productCodes.map(productCode => ({
                from: new RegExp(`^\/${productCode}\/.*`),
                to: `/${productCode}/`
            }))
        },
        headers: { "Access-Control-Allow-Origin": "*" }
    },
    optimization: {
        nodeEnv: 'production',
        concatenateModules: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    enforce: true
                }
            }
        }
    }
});