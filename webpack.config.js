const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('src/Resources/public')
    .setPublicPath('/public')
    .addEntry('app', './assets/js/app.js')
    .copyFiles({
        from: './assets/images',
        to: 'images/[path][name].[ext]',
        includeSubdirectories: true,
        pattern: /\.(png|jpg|jpeg|svg)$/
    })
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .configureFilenames({
        js: 'js/[name].js',
        css: 'css/[name].css',
        images: 'img/[name].[ext]'
    })
;

module.exports = Encore.getWebpackConfig();
