const webpack = require("webpack")
const env = require('dotenv').config()
// const slug = require('slug')
// Slug.defaults.mode = 'rfc3986';


module.exports = {
  buildModules: [
    '@nuxt/postcss8',
  ],
  server: {
    port: 3001,
  },
  mode: 'universal',
  env: env.parsed,
  /*
  ** Headers of the page
  */
  head: {
    title: 'ShopTown Seller',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      // { src: 'https://js.stripe.com/v3/' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
    ]
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'portal-vue/nuxt',
    // '@nuxtjs/fontawesome',
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/sellerlogin',
            method: 'post',
            propertyName: 'meta.token'
          },
          user: {
            url: '/auth/me',
            method: 'get',
            propertyName: 'data'
          },

        }
      }
    }
  },

  router: {
    middleware: [
      'clearValidationErrors'
    ]
  },

  axios: {



    baseURL: process.env.BASEURL

  },

  css: [
    '~/static/assets/css/tailwind.css',
    // '~assets/styles/app.scss',   
  ],

  // styleResources: {
  //   scss: [
  //     '~assets/styles/app.scss',
  //     // '~assets/scss/variables.scss'
  //   ]
  // },


  plugins: [
    '~/plugins/mixins/user.js',
    '~/plugins/mixins/validation.js',
    '~/plugins/mixins/slug.js',
    '~/plugins/axios.js',
    { src: '~/plugins/mixins/paginate', ssr: false },
    { src: '~/plugins/chart', ssr: false },
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    // vendor: ["jquery", "bootstrap"],
    // vendor: ['vue-select'],
    //   plugins: [
    //   new webpack.ProvidePlugin({
    //     $: "jquery"
    //   })
    // ],
    // plugins: [
    //  '~plugins/vue-select.js'
    // ],
    // postcss: {
    //   plugins: {
    //     'postcss-custom-properties': false,

    //   },

    // },
    /*
    ** Run ESLint on save
    */
    vendor: ["jquery"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
    //   postcss: [
    //    require('tailwindcss')('./tailwind.js'),
    //    require('autoprefixer')
    //  ],
    generate: {
      minify: {
        collapseWhitespace: false
      }
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

