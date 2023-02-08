import pkg from './package.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // https://nuxtjs.org/guide/runtime-config
  publicRuntimeConfig: {
    app_version: pkg.version,
    base_url: process.env.base_url || ''
  },

  env: {
    app_version: pkg.version,
    base_url: process.env.base_url || ''
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.title || 'Nuxt V2 Starter Template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@200;300;400;500;600;700;800&display=swap' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: process.env.color || '#000000' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'remixicon/fonts/remixicon.css',
    '@/assets/scss/element-custom.scss',
    '@/assets/scss/main.scss'
  ],
  // https://github.com/nuxt-community/style-resources-module/
  styleResources: {
    scss: [
      '@/assets/scss/utils/_mixins.scss',
      '@/assets/scss/utils/_variables.scss'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/utils',
    '@/plugins/auth'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // global styles
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: process.env.title || 'Nuxt V2 Starter Template',
      lang: 'en'
    },
    icon: {
      source: 'static/icon.png'
    },
    meta: {
      /* meta options */
      theme_color: process.env.color,
      name: process.env.title
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  }
}
