export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'JIP | Jahon Invest Plast',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'view-transition', content: 'same-origin' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['ant-design-vue/dist/antd.css', '@/assets/css/main.css'],

  plugins: [
    '@/plugins/ant-design.js',
    { src: '@/plugins/v-mask.js', ssr: false },
    { src: '@/plugins/lightGallery.client.js' },
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: [
    '@nuxtjs/i18n',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    [
      'vue-toastification/nuxt',
      {
        timeout: 1500,
        draggable: false,
      },
    ],
  ],

  i18n: {
    locales: ['ru', 'uz'],
    defaultLocale: 'ru',
    vueI18n: {
      fallbackLocale: 'ru',
    },
  },

  axios: {
    baseURL: 'https://admin.jahoninvestplast.com/api',
  },

  ssr: true,

  build: {
    babel: {
      compact: true,
    },
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: 'encoding',
        },
      ]
    },
  },
}
