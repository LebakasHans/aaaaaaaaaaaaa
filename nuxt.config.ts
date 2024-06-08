// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],

  devtools: { 
    enabled: true 
  },

  srcDir: "src/",

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
})