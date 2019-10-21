const { DefinePlugin } = require('webpack')

const pkg = require('./package')

module.exports = {
  assetsDir: 'assets',
  chainWebpack,
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/base.scss";'
      }
    }
  },
  outputDir: 'build',
  pages: {
    index: 'src'
  },
  productionSourceMap: false,
  publicPath: ''
}

function chainWebpack (config) {
  config.plugin('define-app').use(DefinePlugin, [
    {
      'process.env': {
        NAME: JSON.stringify(pkg.name),
        VERSION: JSON.stringify(`v${pkg.version}`)
      }
    }
  ])
}
