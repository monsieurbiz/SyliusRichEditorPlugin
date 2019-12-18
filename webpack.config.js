const Encore = require('@symfony/webpack-encore');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('src/Resources/public')
    // public path used by the web server to access the output path
    .setPublicPath('/public')

    // entries
    .addEntry('rich-editor-js', './assets/js/app.js')
    .addStyleEntry('rich-editor-css', './assets/css/app.scss')

    // copy images
    .copyFiles({
        from: './assets/images',
        to: 'images/[path][name].[ext]',
        includeSubdirectories: true,
        pattern: /\.(png|jpg|jpeg|svg)$/
    })

    // configuration
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    // enables Sass/SCSS support
    .enableSassLoader()
    // enables PostCSS support
    .enablePostCssLoader()

    // organise files
    .configureFilenames({
        js: 'js/[name].js',
        css: 'css/[name].css',
        images: 'images/[name].[ext]'
    })
;

module.exports = Encore.getWebpackConfig();
