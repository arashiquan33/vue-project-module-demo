const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: {
      main:"./main.js"
  },
  mode:"development",
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 9000
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js' 
    }
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      chunks:'all'
    }),
    new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        generateStatsFile: true,
        statsOptions: { source: false }
    })
  ],
  optimization:{
    splitChunks: {
        chunks: "all",
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: 100,
                name:'vendor'
            },
            // core:{
            //     test:/[\\/]src[\\/]core[\\/]/,
            //     priority:90,
            //     name:'core',
            //     minSize: 0
            // },
            main: {
                priority: 20,
                reuseExistingChunk: true
            }
        }
    }
  }


};