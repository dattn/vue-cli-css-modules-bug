const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      css: {
        modules: {
          localIdentName: '[name]_[local]_[hash:base64:5]'
        }
      }
    }
  }
})
