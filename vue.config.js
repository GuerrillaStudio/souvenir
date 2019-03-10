module.exports = {
  pwa: {
    name: 'Souvenir',
    themeColor: '#8420a7',
    msTileColor: '#212045',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      importWorkboxFrom: 'local'
    }
  },
  parallel: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.worker\.js$/,
          use: {
            loader: 'worker-loader',
            options: { inline: true }
          }
        }
      ]
    }
  }
}
