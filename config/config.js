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
  home: 'home',
  aboutUs: 'aboutUs',
  contact: 'contact',
  news: 'news',
  newsDetail: 'news-detail',
}

// Define entry for webpack
const entry = Object.values(jsFile).reduce(
  (act, entry) => ({ ...act, [entry]: `${paths.src}/js/${entry}.js` }),
  {}
)

// Define Pages info for HtmlWebpackPlugin
const pagesInfo = [
  {
    title: 'Trang chủ',
    filename: 'index.html',
    template: 'index.pug',
    chunks: [jsFile.home],
    build: true,
    buildName: 'trang-chu.html',
  },
  {
    title: 'About us',
    filename: 'about-us.html',
    template: 'about-us.pug',
    chunks: [jsFile.aboutUs],
    build: true,
    buildName: 'about-us.html',
  },
  {
    title: 'Contact',
    filename: 'contact.html',
    template: 'contact.pug',
    chunks: [jsFile.contact],
    build: true,
    buildName: 'contact.html',
  },
  {
    title: 'News',
    filename: 'news.html',
    template: 'news.pug',
    chunks: [jsFile.news],
    build: true,
    buildName: 'news.html',
  },
  {
    title: 'News Detail',
    filename: 'news-detail.html',
    template: 'news-detail.pug',
    chunks: [jsFile.newsDetail],
    build: true,
    buildName: 'news-detail.html',
  },
]

// List HtmlWebpackPlugin that render dist folder
const htmlWebpackPlugins = pagesInfo.map(
  (page) =>
    new HtmlWebpackPlugin({
      title: page.title,
      template: `${paths.src}/pages/${page.template}`,
      filename: page.filename,
      chunks: [jsFile.main, ...page.chunks],
      publicPath: './',
    })
)

const htmlWebpackPluginsBuild = pagesInfo
  .filter((item) => item.build)
  .map(
    (page) =>
      new HtmlWebpackPlugin({
        title: page.title,
        template: `${paths.src}/pages/${page.template}`,
        filename: page?.buildName || page.filename,
        chunks: [jsFile.main, ...page.chunks],
        publicPath: './',
        minify: false,
      })
  )

module.exports = {
  paths,
  entry,
  pagesInfo,
  htmlWebpackPluginsBuild,
  htmlWebpackPlugins,
}
