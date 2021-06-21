const path = require('path')

module.exports = {
  // 最初に読み込むファイルの指定
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader', // .tsで終わるファイルに対して、ts-loaderを実行するという意味
        exclude: /node_modules/, // buildする必要がないファイル
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  // 出力するファイルの指定
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'dist/',
  }
}
