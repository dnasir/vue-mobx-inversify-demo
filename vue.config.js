module.exports = {
  outputDir: 'docs',
  baseUrl: process.env.NODE_ENV === 'production' ? 'vue-mobx-inversify-demo/' : '/',
  configureWebpack: {
    externals: {
      'vue': 'window.Vue',
      'vuetify': 'window.Vuetify',
      'mobx': 'window.mobx'
    }
  }
};