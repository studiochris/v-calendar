const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin;

module.exports = {
    outputDir: 'lib',
    css: {
        sourceMap: true
    },

    configureWebpack: {
        // Uncomment to run analyzer - it freezes builds r/n for some reason
        // plugins: [new BundleAnalyzerPlugin()],
        resolve: {
            alias: {
                '@': path.resolve('src'),
            },
        },
    },

    lintOnSave: undefined
};