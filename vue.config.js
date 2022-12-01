// 配置 @ 路径
let path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置 @ 路径
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      // key,value可以自行定义，比如.set('@@', resolve('src/components'))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("utils", resolve("utils"))
  },
})
