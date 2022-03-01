const { defineConfig } = require('@vue/cli-service')
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = process.env.port || 9090; // dev port

module.exports = ({
  publicPath: './',
  assetsDir: 'static',
  configureWebpack: {
    name: 'mapp-demo',
    devtool: 'source-map'
  },
  lintOnSave: true,
  productionSourceMap: false,
  open: true,
  https: false,
  hotOnly: false,
  chainWebpack:(config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@s', resolve('src/styles'))
      .set('@a', resolve('src/assets'))
      .set('@c', resolve('src/components'));
    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          // 要公用的scss的路径
          resources: './src/styles/index.scss'
        })
        .end();
    });
  },
  
})
