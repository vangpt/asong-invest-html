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
  galleryDetail: 'galleryDetail',
}

// Define entry for webpack
const entry = Object.values(jsFile).reduce(
  (act, entry) => ({ ...act, [entry]: `${paths.src}/js/${entry}.js` }),
  {}
)

const URL_PAGE = 'https://asonginvest.com/'

// Define Pages info for HtmlWebpackPlugin
const pagesInfo = [
  {
    title: 'Asong Invest',
    desc: 'ASONG INVEST is a multi-disciplinary investment firm focused on impact opportunities dedicated to providing long-term sustainable investment to those impact-generating corporate champions and impact-creating project winners in Vietnam.',
    url: `${URL_PAGE}`,
    image: `${URL_PAGE}assets/logo.jpg`,
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
    image: `${URL_PAGE}assets/logo.jpg`,
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
    image: `${URL_PAGE}assets/logo.jpg`,
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
    image: `${URL_PAGE}assets/logo.jpg`,
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
    image: `${URL_PAGE}assets/logo.jpg`,
    filename: 'news.html',
    template: 'news.pug',
    chunks: [jsFile.news],
    build: true,
    buildName: 'news.html',
  },

  // demo gallery
  // {
  //   title: 'Title gallery 1',
  //   desc: 'Desc gallery 1',
  //   url: `${URL_PAGE}gallery1.html`,
  //   image: `${URL_PAGE}assets/images/news/news-1.1.png`,
  //   filename: 'gallery1.html',
  //   template: 'gallery/gallery1.pug',
  //   chunks: [jsFile.galleryDetail],
  //   build: true,
  //   buildName: 'gallery1.html',
  // },

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
  {
    title: 'Asong Invest, Noble, PVCB Capital sign deal for renewable energy fund',
    desc: 'Asong Invest, Noble Vietnam, and PVCB Capital signed a memorandum of understanding on June 23 to cooperate in establishing the PV-Asong Green Growth Investment Fund.',
    url: `${URL_PAGE}news/asong-invest-noble-pvcb-capital-sign-deal-for-renewable-energy-fund.html`,
    image: `${URL_PAGE}assets/images/news/news-1.1.png`,
    filename: 'asong-invest-noble-pvcb-capital-sign-deal-for-renewable-energy-fund.html',
    template: 'news/asong-invest-noble-pvcb-capital-sign-deal-for-renewable-energy-fund.pug',
    chunks: [jsFile.newsDetail],
    build: true,
    buildName: 'news/asong-invest-noble-pvcb-capital-sign-deal-for-renewable-energy-fund.html',
  },
  {
    title: 'Asong Invest, Noble và PVCB Capital ký kết MOU về Quỹ năng lượng tái tạo',
    desc: "Ngày 23/6/2023, tại Hà Nội, công ty TNHH Asong Invest (viết tắt là Asong Invest), công ty TNHH Noble (Việt Nam) (viết tắt là Noble) và công ty Cổ phần Quản lý Quỹ Ngân hàng TMCP Đại chúng Việt Nam (viết tắt là PVCB Capital) đã ký kết biên bản ghi nhớ về hợp tác chung trong việc thành lập 'Quỹ đầu tư tăng trưởng xanh PV-Asong'",
    url: `${URL_PAGE}news/asong-invest-noble-va-pvcb-capital-ky-ket-mou-ve-quy-nang-luong-tai-tao.html`,
    image: `${URL_PAGE}assets/images/news/news-1.2.png`,
    filename: 'asong-invest-noble-va-pvcb-capital-ky-ket-mou-ve-quy-nang-luong-tai-tao.html',
    template: 'news/asong-invest-noble-va-pvcb-capital-ky-ket-mou-ve-quy-nang-luong-tai-tao.pug',
    chunks: [jsFile.newsDetail],
    build: true,
    buildName: 'news/asong-invest-noble-va-pvcb-capital-ky-ket-mou-ve-quy-nang-luong-tai-tao.html',
  },
  {
    title: 'PV Power, Asong Invest, and PVCB Capital sign MoU on green industry',
    desc: 'On August 25 in Hanoi, PetroVietnam Power Corporation (PV Power), along with Asong Invest and PVCB Capital, signed an MoU signing to co-invest and collaborate on green industry in Vietnam.',
    url: `${URL_PAGE}news/pv-power-asong-invest-and-pvcb-capital-sign-mou-on-green-industry.html`,
    image: `${URL_PAGE}assets/images/news/news-7.1.png`,
    filename: 'pv-power-asong-invest-and-pvcb-capital-sign-mou-on-green-industry.html',
    template: 'news/pv-power-asong-invest-and-pvcb-capital-sign-mou-on-green-industry.pug',
    chunks: [jsFile.newsDetail],
    build: true,
    buildName: 'news/pv-power-asong-invest-and-pvcb-capital-sign-mou-on-green-industry.html',
  },
  {
    title: 'Ủy ban Olympic Việt Nam làm việc với ASONG INVEST',
    desc: 'Công ty TNHH ASONG INVEST ở Hà Nội, Liên đoàn Bắn súng Việt Nam, Ủy ban Olympic Việt Nam đã có buổi làm việc về việc hỗ trợ, tài trợ cho đội tuyển Bắn súng Việt Nam tìm kiếm thêm các suất tham dự Olympic Paris 2024.',
    url: `${URL_PAGE}news/uy-ban-olympic-viet-nam-lam-viec-voi-asong-invest.html`,
    image: `${URL_PAGE}assets/images/news/news-uy-ban-olympic.png`,
    filename: 'uy-ban-olympic-viet-nam-lam-viec-voi-asong-invest.html',
    template: 'news/uy-ban-olympic-viet-nam-lam-viec-voi-asong-invest.pug',
    chunks: [jsFile.newsDetail],
    build: true,
    buildName: 'news/uy-ban-olympic-viet-nam-lam-viec-voi-asong-invest.html',
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
