const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Define global paths
const paths = {
  src: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, '../dist'),
  // Allow import images from css for background,...
  public: path.resolve(__dirname, '../public'),
  pages: path.join(__dirname, 'src/pages'),
}

// Define Javascript file name in src
const jsFile = {
  main: 'main',
  about: 'about',
}

// Define entry for webpack
const entry = Object.values(jsFile).reduce(
  (act, entry) => ({ ...act, [entry]: `${paths.src}/js/${entry}.js` }),
  {}
)

// Define Pages info for HtmlWebpackPlugin
const pagesInfo = [
  { title: 'Dashboard', filename: 'index.html', template: 'index.html', chunks: [] },
  { title: 'About', filename: 'about.html', template: 'about.html', chunks: [jsFile.about] },
]

// List HtmlWebpackPlugin that render dist folder
const htmlWebpackPlugins = pagesInfo.map(
  (page) =>
    new HtmlWebpackPlugin({
      title: page.title,
      template: `${paths.src}/pages/${page.filename}`,
      filename: page.filename,
      chunks: [jsFile.main, ...page.chunks],
      publicPath: './',
    })
)

module.exports = {
  paths,
  entry,
  pagesInfo,
  htmlWebpackPlugins,
}
