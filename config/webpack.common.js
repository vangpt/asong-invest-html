const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { paths, entry, htmlWebpackPlugins } = require('./config')

module.exports = {
  // Where webpack looks to start building the bundle
  entry,

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: 'js/[name].[contenthash].bundle.js',
    publicPath: '/',
    clean: true,
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },

      // Fonts: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf)$/, type: 'asset/inline' },

      // Pug: Use Pug to render html file
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              // Define root path, then modify your includes to start with a /
              root: paths.src,
              pretty: true,
            },
          },
        ],
      },

      // Html: Load html file, don't need if use Pug
      {
        test: /\.(html)$/,
        include: paths.pages,
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true,
          },
        },
      },
    ],
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.css'],
    // Alias import file
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
}
