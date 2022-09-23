const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

const config = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: 'cheap-source-map',
  context: path.join(__dirname, 'src'),
  entry: ['./main.ts'],
  devServer: {
    client: {
      overlay: true,
    },
    static: {
      directory: path.join(__dirname, 'public'),
      serveIndex: true,
      watch: true,
    },
    devMiddleware: {
      writeToDisk: true,
    },
    hot: true,
  },
  output: {
    path: path.join(__dirname, 'public/build'),
    filename: 'bundle.min.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                isDevelopment && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader', options: { injectType: 'styleTag' } },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean),
};

module.exports = config;
