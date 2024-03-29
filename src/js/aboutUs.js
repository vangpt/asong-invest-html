import '../styles/pages/aboutUs.css'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

import Swiper from 'swiper'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules'

const LIST_OUR_TEAM = [
  {
    id: 'young-kyu-lim',
    image: 'youngkyu-lim.png',
    title: 'Young Kyu Lim',
    subTitle: 'Chair of the Board',
    description:
      "Mr. Lim is currently the Vice Chairman and the largest shareholder of Gemopia Jewelry Group. Established in 1978, and is now one of the world's largest ODM fine jewelry manufacturers. It has two sales offices in Korea and Japan, with three factories in China, Vietnam, and Indonesia.\n\nIn Seoul, he also led and completed more than 12 successful greenfield real estate development projects for commercial & office buildings through its real estate investment subsidiary in Korea.\n\nHe also actively participates in many positions in local and international sports associations.\n\nIncluding the Vice President position for the Korea Table Tennis Association, the Vice President for the International Sports Strategy Foundation in Korea, and the Vice Chair of the Global E-Sports Federation [FLA Commission].\n\n Mr. Lim received a BA in Science from Michigan State University, East Lansing.",
  },
  {
    id: 'ser-miang-ng',
    image: 'ser.png',
    title: 'Ser Miang Ng',
    subTitle: 'Special Advisor',
    description:
      "A special advisor and mentor to ASONG INVEST, Mr. Ng is one of the longest-serving members of the International Olympic Committee (IOC) and is the most influential sports administrator in Asia. Respectively, he has served on the Executive Board of the IOC from 2005-10 and 2016-19 and has been an IOC vice-president from 2010-14 and 2020 through at least 2022. He has also chaired the Finance Commission and the Human Resources Committee Commission and served on many other IOC commissions. \n\nIn the business world, he founded the Trans-Island Bus Services (TIBS) in 1982 and sold it to SMRT Corporation. Since then, Mr. Ng has held many leadership and advisory roles in Singapore's business community, including the Singapore Insurance Ombudsman Bureau, NTUC Choice Homes, NTUC FairPrice, and Rowsley Ltd. He is currently a Director of Singapore Press Holdings since 2007.\n\nIn the Public Service, he has represented Singapore as a non-resident Ambassador to Norway from 2001 ~2012 and Hungary from 2000 to 2012. He has also served as a Singapore Justice of Peace from 2005 and was a Member of Parliament from 2002 to 2005.\n\nMr. Ng earned his BA in Business with Honours from the University of Singapore.",
  },
  {
    id: 'byun-jong-jin',
    image: 'john-byun.png',
    title: 'Byun Jong-Jin (John)',
    subTitle: 'Managing Partner',
    description:
      'Mr. Byun is the Managing Partner and CIO of ASONG INVEST. His primary responsibility is overseeing the execution of new investments and structuring the existing mechanism. When possible, he will also serve as a board member of the portfolio or project companies to closely monitor their operations and progress.\n\nMr. Byun brings 30 years of extensive experience in a commercial bank, securities firm, merchant bank, investment bank, and private equity investment from Australia, Hong Kong, and Korea. During this time, he advised, executed, and led the advisory team for many M&A transactions, NPL deals, corporate finance issuance, and real estate-related transactions.\n\nMr. Byun received his BA in Business (Major in Finance) from the University of Technology Sydney.',
  },
  {
    id: 'sung-seung-hoon-sung',
    image: 'sung-seung-hoon.png',
    title: 'Sung Seung Hoon',
    subTitle: 'Managing Partner',
    description:
      'Mr. Sung is the Managing Partner and CEO of ASONG INVEST. His primary responsibility is for deal origination and execution. He also oversees portfolio companies and projects day to day management.\n\nBefore joining ASONG INVEST, Mr. Sung was CIO of Nemo Partners Investment & Consulting in Vietnam for eight years, heading up the advisory and consulting division for Infrastructure and Renewable Energy Industry. During his time with Keangnam Landmark 72, he was one of the key members involved in the planning, constructing, and managing the Hanoi’s largest landmark real estate project, “Kyugnam Tower’. He started his career as an Investment Analyst for Credit Agricole Corporate and Investment Bank., Seoul.\n\nMr. Sung holds an MSc in International Labour Relationships from the London School of Economics and graduated with a BA in Business Administration from Korea University, Seoul.',
  },
  {
    id: 'kim-so-yeun',
    image: 'kim-so-yeon.png',
    title: 'Kim So Yeon',
    subTitle: 'Executive Director',
    description:
      'Ms. Kim is the Executive Director and COO of ASONG INVEST. She oversees the daily operation of the company. She is also responsible for all non-core investment assets of ASONF INVEST, including F&B exposures.\n\nBefore joining ASONG INVEST, Ms. Sung was the Executive Director of Nemo Partners Investment & Consulting in Vietnam. Previously a founder of a successful F&B franchise in Hanoi. Before coming to Vietnam, she started her career as a Business Analyst for Shihan Macquarie Financial Advisory in Seoul, then moved to Dubai to join ADCB Macquarie Corporate Finance in UAE.\n\nMs. Kim graduated with MBA from NYU Stern School of Business with a BA in Business Administration from Sookmyung Women’s University, Seoul.',
  },
  {
    id: 'hoang-le-thuy-duong',
    image: 'thuy-duong.png',
    title: 'Hoàng Lê Thùy Dương',
    subTitle: 'Executive Director',
    description:
      "As the Executive Director and CMO of ASONG INVEST, Ms. Hoang is in charge of our public relationship with all government authorities and other private corporations or institutions.\n\nBefore joining ASONG INVEST, Ms. Hoang was the CEO of Nemo Partners Investment & Consulting in Vietnam. Spending most of her youth in London, she started her career as a reporter for the BBC World Service. After returning to Hanoi, she worked as Relationship Manager for the global financial institutions; Standard Chartered and HSBC.\n\nShe serves the community by spending and dedicating her time to various charities and associations. She's an Ambassador for Facing The World UK Charity Foundation and the Deputy General Secretary for the Central Vietnam-UK Friendship.\n\nShe obtained a BA of Science in Accounting & Finance from the London School of Economics and Political Science.",
  },
  {
    id: 'tran-hong-nhung',
    image: 'tran-hong-nhung.png',
    title: 'Trần Hồng Nhung',
    subTitle: 'Director',
    description:
      'Ms. Tran is the Director and Senior Operation Manager of ASONG INVEST. She in charge of Human Resources and Administrative Departments\n\nMs. Tran’s expertise in corporate establishment to operational issues come from her past 12 years of experience in medical industry, such as Vinmec International Hospital, Hanoi Obstetrics and Gynecology Hospital and Hanoi General Hospital.\n\nMs. Tran holds a Master of Business Management (MSc) from the University of East Anglia UK, and received a Bachelor of Business Law (BSc), National Economics University Vietnam',
  },
]

window.addEventListener('DOMContentLoaded', function () {
  const doc = this.document

  AOS.init({
    disable: 'mobile',
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
    once: true,
  })

  new Swiper('#our-team .swiper', {
    modules: [Navigation, Autoplay],
    navigation: {
      nextEl: '#next-status',
      prevEl: '#prev-status',
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  })

  const modalShowMemberDetail = doc.querySelector('#modalShowMemberDetail')
  const closeModalShowMemberDetail = doc.querySelector('#closeModalShowMemberDetail')
  const imageModalTeam = doc.querySelector('#imageModalTeam')
  const titleModalTeam = doc.querySelector('#titleModalTeam')
  const subTitleModalTeam = doc.querySelector('#subTitleModalTeam')
  const descModalTeam = doc.querySelector('#descModalTeam')

  modalShowMemberDetail.addEventListener('click', hideModalMember)

  function showModalMember() {
    modalShowMemberDetail.classList.add('show')
    doc.querySelector('body').style.overflow = 'hidden'
  }
  function hideModalMember() {
    modalShowMemberDetail.classList.remove('show')
    doc.querySelector('body').style.overflow = 'auto'
  }

  const listOurTeam = doc.querySelectorAll('.our-team')
  listOurTeam.forEach(function (member) {
    member.addEventListener('click', function () {
      const id = member.getAttribute('id')
      const infoMember = LIST_OUR_TEAM.find((member) => member.id === id)
      imageModalTeam.setAttribute('src', `assets/images/team/${infoMember.image}`)
      titleModalTeam.innerHTML = infoMember.title
      subTitleModalTeam.innerHTML = infoMember.subTitle
      descModalTeam.innerHTML = infoMember.description
      showModalMember()
    })
  })
  window.addEventListener('click', function (e) {
    if (doc.querySelector('.modal-content').contains(e.target)) {
      if (closeModalShowMemberDetail.contains(e.target)) {
        hideModalMember()
      } else {
        showModalMember()
      }
    }
  })
})
