import HtmlWebpackPlugin from 'html-webpack-plugin'
import autoprefixer from 'autoprefixer'
import webpack from 'webpack'
import cssnano from 'cssnano'
import path from 'path'

const config = () => ({
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    path.resolve('src', 'app', 'index.js'),
    path.resolve('src', 'app', 'index.less')
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader?url=false',
          { loader: 'postcss-loader', options: {
            plugins: [autoprefixer, cssnano] }
          },
          'less-loader'
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: ['react-hot-loader/babel'],
              presets: ['es2015', 'react', 'stage-0']
            }
          }
        ]
      }
    ]
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    },
    runtimeChunk: true
  },
  output: {
    path: path.resolve('public'),
    filename: 'application.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'app','index.html')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV':JSON.stringify(process.env.NODE_ENV),
        'GA_PROPERTY_ID':JSON.stringify(process.env.GA_PROPERTY_ID)
      }
    })
  ]
})

export default config
