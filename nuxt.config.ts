// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],

  devtools: {
    enabled: true,
  },

  srcDir: 'src/',

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
