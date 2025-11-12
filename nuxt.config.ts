// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   head: {
  //     title: "Snow",
  //     htmlAttrs: {
  //       lang: "en",
  //     },
  //     link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico " }],
  //   },
  // },
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
});
