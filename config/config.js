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
    buildName: 'index.html',
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
  {
    title: 'Asong Invest, Noble, PVCB Capital sign deal for renewable energy fund',
    filename: 'asong-invest-noble-pvcb-capital-sign-deal-for-renewable-energy-fund.html',
    template: 'asong-invest-noble-pvcb-capital-sign-deal-for-renewable-energy-fund.pug',
    chunks: [jsFile.newsDetail],
    build: true,
    buildName: 'asong-invest-noble-pvcb-capital-sign-deal-for-renewable-energy-fund.html',
  },
  {
    title: 'Asong Invest, Noble và PVCB Capital ký kết MOU về Quỹ năng lượng tái tạo',
    filename: 'asong-invest-noble-va-pvcb-capital-ky-ket-mou-ve-quy-nang-luong-tai-tao.html',
    template: 'asong-invest-noble-va-pvcb-capital-ky-ket-mou-ve-quy-nang-luong-tai-tao.pug',
    chunks: [jsFile.newsDetail],
    build: true,
    buildName: 'asong-invest-noble-va-pvcb-capital-ky-ket-mou-ve-quy-nang-luong-tai-tao.html',
  },
  {
    title:
      'International Sports Strategy Foundation, Vietnam Olympic Committee collaborate in training',
    filename:
      'international-sports-strategy-foundation-vietnam-olympic-committee-collaborate-in-training.html',
    template:
      'international-sports-strategy-foundation-vietnam-olympic-committee-collaborate-in-training.pug',
    chunks: [jsFile.newsDetail],
    build: true,
    buildName:
      'international-sports-strategy-foundation-vietnam-olympic-committee-collaborate-in-training.html',
  },
  {
    title: 'Vietnamese athletes to get $1M bonus for Olympic gold medal',
    filename: 'vietnamese-athletes-to-get-1m-bonus-for-olympic-gold-medal.html',
    template: 'vietnamese-athletes-to-get-1m-bonus-for-olympic-gold-medal.pug',
    chunks: [jsFile.newsDetail],
    build: true,
    buildName: 'vietnamese-athletes-to-get-1m-bonus-for-olympic-gold-medal.html',
  },
  {
    title: 'Nemo Partners introduces Korean spiritual gastronomy featuring revered chef Jeong Kwan',
    filename:
      'nemo-partners-introduces-korean-spiritual-gastronomy-featuring-revered-chef-jeong-kwan.html',
    template:
      'nemo-partners-introduces-korean-spiritual-gastronomy-featuring-revered-chef-jeong-kwan.pug',
    chunks: [jsFile.newsDetail],
    build: true,
    buildName:
      'nemo-partners-introduces-korean-spiritual-gastronomy-featuring-revered-chef-jeong-kwan.html',
  },
  {
    title: "Nemo-PVcom Merit Fund eyes int'l investors",
    filename: 'nemo-pvcom-merit-fund-eyes-int-l-investors.html',
    template: 'nemo-pvcom-merit-fund-eyes-int-l-investors.pug',
    chunks: [jsFile.newsDetail],
    build: true,
    buildName: 'nemo-pvcom-merit-fund-eyes-int-l-investors.html',
  },
  {
    title: 'Quỹ đầu tư giá trị Nemo - PVcom hoàn thành vòng gọi vốn ban đầu',
    filename: 'quy-dau-tu-gia-tri-nemo-pvcom-hoan-thanh-vong-goi-von-ban-dau.html',
    template: 'quy-dau-tu-gia-tri-nemo-pvcom-hoan-thanh-vong-goi-von-ban-dau.pug',
    chunks: [jsFile.newsDetail],
    build: true,
    buildName: 'quy-dau-tu-gia-tri-nemo-pvcom-hoan-thanh-vong-goi-von-ban-dau.html',
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
