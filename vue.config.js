const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    //proxy: 'https://api.tfdevs.com'
    //proxy: 'http://localhost:80'
    //proxy: 'http://172.23.128.93'
    proxy: process.env.VUE_APP_URL
  }
})
