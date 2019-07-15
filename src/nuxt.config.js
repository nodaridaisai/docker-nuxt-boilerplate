
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'デフォルトタイトル',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'デフォルト説明文' },
      // Twitter Card
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Twitterアカウント' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'トップページタイトル' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'デフォルト説明文' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'OGP URL' },
    ],
    link: [
      // TODO: アイコン作る
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  router: {
    // TODO: 今年にする
    base: '/2019/',
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-analytics', {
      id: '' // TODO: Google アナリティクス トラッキング ID を設定する
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
