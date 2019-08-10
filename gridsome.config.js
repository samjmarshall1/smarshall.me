module.exports = {
  siteName: 'Sam Marshall resume',
  siteUrl: 'https://www.gridsome.org',
  icon: '~/src/favicon.png',
  plugins: [{
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-145391677-1'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }

}

}





// module.exports = {
//
//
// // import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// // import { config, library } from '@fortawesome/fontawesome-svg-core'
// // import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
// // import '@fortawesome/fontawesome-svg-core/styles.css'
//   siteName: '',
//   siteDescription: '',
//   siteUrl: 'https://gridsome-starter-resume.loke.dev',
//   chainWebpack: config => {
//    const svgRule = config.module.rule('svg')
//    svgRule.uses.clear()
//    svgRule
//      .use('vue-svg-loader')
//      .loader('vue-svg-loader')
//  }
//  config.autoAddCss = false;
// library.add(faGithub, faTwitter)
//
// export default function (Vue) {
//   Vue.component('font-awesome', FontAwesomeIcon)
// }
//   plugins: [{
//       use: '@gridsome/plugin-google-analytics',
//       options: {
//         id: 'UA-72659574-11'
//       }
//     },
//     {
//       use: '@gridsome/plugin-sitemap',
//       options: {
//         cacheTime: 600000
//       }
//     }
//   ],
//   css: {
//     loaderOptions: {
//       scss: {}
//     }
//   }
// }
