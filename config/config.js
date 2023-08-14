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
  newsDetail: 'news/news-detail',
}

// Define entry for webpack
const entry = Object.values(jsFile).reduce(
  (act, entry) => ({ ...act, [entry]: `${paths.src}/js/${entry}.js` }),
  {}
)

const URL_PAGE = 'https://company-html.vercel.app/'

// Define Pages info for HtmlWebpackPlugin
const pagesInfo = [
  {
    title: 'Asong Invest',
    desc: 'ASONG INVEST is a multi-disciplinary investment firm focused on impact opportunities dedicated to providing long-term sustainable investment to those impact-generating corporate champions and impact-creating project winners in Vietnam.',
    url: `${URL_PAGE}`,
    image: `${URL_PAGE}assets/images/banner-office-3.png`,
    filename: 'index.html',
    template: 'index.pug',
    chunks: [jsFile.home],
    build: true,
    buildName: 'index.html',
  },
  {
    title: 'Asong Invest',
    desc: 'ASONG INVEST is a multi-disciplinary investment firm focused on impact opportunities dedicated to providing long-term sustainable investment to those impact-generating corporate champions and impact-creating project winners in Vietnam.',
    url: `${URL_PAGE}about-us.html`,
    image: `${URL_PAGE}assets/images/banner-office-3.png`,
    filename: 'about-us.html',
    template: 'about-us.pug',
    chunks: [jsFile.aboutUs],
    build: true,
    buildName: 'about-us.html',
  },
  {
    title: 'Asong Invest',
    desc: 'ASONG INVEST is a multi-disciplinary investment firm focused on impact opportunities dedicated to providing long-term sustainable investment to those impact-generating corporate champions and impact-creating project winners in Vietnam.',
    url: `${URL_PAGE}contact.html`,
    image: `${URL_PAGE}assets/images/banner-office-3.png`,
    filename: 'contact.html',
    template: 'contact.pug',
    chunks: [jsFile.contact],
    build: true,
    buildName: 'contact.html',
  },
  {
    title: 'Asong Invest',
    desc: 'ASONG INVEST is a multi-disciplinary investment firm focused on impact opportunities dedicated to providing long-term sustainable investment to those impact-generating corporate champions and impact-creating project winners in Vietnam.',
    url: `${URL_PAGE}404.html`,
    image: `${URL_PAGE}assets/images/banner-office-3.png`,
    filename: '404.html',
    template: '404.pug',
    chunks: [jsFile.contact],
    build: true,
    buildName: '404.html',
  },
  {
    title: 'Asong Invest',
    desc: 'ASONG INVEST is a multi-disciplinary investment firm focused on impact opportunities dedicated to providing long-term sustainable investment to those impact-generating corporate champions and impact-creating project winners in Vietnam.',
    url: `${URL_PAGE}news.html`,
    image: `${URL_PAGE}assets/images/banner-office-3.png`,
    filename: 'news.html',
    template: 'news.pug',
    chunks: [jsFile.news],
    build: true,
    buildName: 'news.html',
  },
  // completed projects
  {
    title: 'Asong Invest, Noble, PVCB Capital sign deal for renewable energy fund',
    desc: 'Asong Invest, Noble Vietnam, and PVCB Capital signed a memorandum of understanding on June 23 to cooperate in establishing the PV-Asong Green Growth Investment Fund.',
    url: `${URL_PAGE}asong-invest-noble-pvcb-capital-sign-deal-for-renewable-energy-fund.html`,
    image: `${URL_PAGE}assets/images/news/news-1.1.png`,
    filename: 'asong-invest-noble-pvcb-capital-sign-deal-for-renewable-energy-fund.html',
    template: 'asong-invest-noble-pvcb-capital-sign-deal-for-renewable-energy-fund.pug',
    chunks: [jsFile.newsDetail],
    build: true,
    buildName: 'asong-invest-noble-pvcb-capital-sign-deal-for-renewable-energy-fund.html',
  },
  {
    title: 'Asong Invest, Noble và PVCB Capital ký kết MOU về Quỹ năng lượng tái tạo',
    desc: "Ngày 23/6/2023, tại Hà Nội, công ty TNHH Asong Invest (viết tắt là Asong Invest), công ty TNHH Noble (Việt Nam) (viết tắt là Noble) và công ty Cổ phần Quản lý Quỹ Ngân hàng TMCP Đại chúng Việt Nam (viết tắt là PVCB Capital) đã ký kết biên bản ghi nhớ về hợp tác chung trong việc thành lập 'Quỹ đầu tư tăng trưởng xanh PV-Asong'",
    url: `${URL_PAGE}asong-invest-noble-va-pvcb-capital-ky-ket-mou-ve-quy-nang-luong-tai-tao.html`,
    image: `${URL_PAGE}assets/images/news/news-1.2.png`,
    filename: 'asong-invest-noble-va-pvcb-capital-ky-ket-mou-ve-quy-nang-luong-tai-tao.html',
    template: 'asong-invest-noble-va-pvcb-capital-ky-ket-mou-ve-quy-nang-luong-tai-tao.pug',
    chunks: [jsFile.newsDetail],
    build: true,
    buildName: 'asong-invest-noble-va-pvcb-capital-ky-ket-mou-ve-quy-nang-luong-tai-tao.html',
  },
  // news
  {
    title:
      'International Sports Strategy Foundation, Vietnam Olympic Committee collaborate in training',
    desc: 'The International Sports Strategy Foundation (ISF) will open an office in Vietnam, with assistance from Gemopia Investment Group, to boost sport training with Vietnam Olympic Committee.',
    url: `${URL_PAGE}news/international-sports-strategy-foundation-vietnam-olympic-committee-collaborate-in-training.html`,
    image: `${URL_PAGE}assets/images/news/news-3.1.png`,
    filename:
      'international-sports-strategy-foundation-vietnam-olympic-committee-collaborate-in-training.html',
    template:
      'news/international-sports-strategy-foundation-vietnam-olympic-committee-collaborate-in-training.pug',
    chunks: [jsFile.newsDetail],
    build: true,
    buildName:
      'news/international-sports-strategy-foundation-vietnam-olympic-committee-collaborate-in-training.html',
  },
  {
    title: 'Vietnamese athletes to get $1M bonus for Olympic gold medal',
    desc: 'Any Vietnamese athlete winning a gold medal at the 2024 Olympic Games in France will get a bonus of $1 million.',
    url: `${URL_PAGE}news/vietnamese-athletes-to-get-1m-bonus-for-olympic-gold-medal.html`,
    image: `${URL_PAGE}assets/images/news/news-4.1.png`,
    filename: 'vietnamese-athletes-to-get-1m-bonus-for-olympic-gold-medal.html',
    template: 'news/vietnamese-athletes-to-get-1m-bonus-for-olympic-gold-medal.pug',
    chunks: [jsFile.newsDetail],
    build: true,
    buildName: 'news/vietnamese-athletes-to-get-1m-bonus-for-olympic-gold-medal.html',
  },
  {
    title: "Nemo-PVcom Merit Fund eyes int'l investors",
    desc: 'Nemo-PVcom Merit Fund (NPMF) has completed its initial round of funding, aiming to up figures in 2022 and 2023 via global investors.',
    url: `${URL_PAGE}news/nemo-pvcom-merit-fund-eyes-int-l-investors.html`,
    image: `${URL_PAGE}assets/images/news/news-6.1.png`,
    filename: 'nemo-pvcom-merit-fund-eyes-int-l-investors.html',
    template: 'news/nemo-pvcom-merit-fund-eyes-int-l-investors.pug',
    chunks: [jsFile.newsDetail],
    build: true,
    buildName: 'news/nemo-pvcom-merit-fund-eyes-int-l-investors.html',
  },
]

// List HtmlWebpackPlugin that render dist folder
const htmlWebpackPlugins = pagesInfo.map(
  (page) =>
    new HtmlWebpackPlugin({
      title: page.title,
      desc: page.desc,
      url: page.url,
      image: page.image,
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
        desc: page.desc,
        url: page.url,
        image: page.image,
        template: `${paths.src}/pages/${page.template}`,
        filename: page?.buildName || page.filename,
        chunks: [jsFile.main, ...page.chunks],
        publicPath: './',
        minify: true,
      })
  )

module.exports = {
  paths,
  entry,
  pagesInfo,
  htmlWebpackPluginsBuild,
  htmlWebpackPlugins,
}
