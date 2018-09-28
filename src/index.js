import devServer from 'webpack-dev-server'
import config from './webpack.config'
import Webpack from 'webpack'
import path from 'path'

const devserver = new devServer(Webpack(config()), {
  contentBase: path.join('src', 'public'),
  compress: true,
  hot: true,
  stats: 'errors-only',
  watchContentBase: true,
  open: true,
  historyApiFallback: {
    disableDotRule: true,
    rewrites: [
      { from: /.*/, to: 'index.html' }
    ]
  }
})

devserver.listen(3000, () => {
  console.info('listening on 3000')
})
