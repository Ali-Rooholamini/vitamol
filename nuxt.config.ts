import { resolve } from "path"

export default defineNuxtConfig({
  devtools: { enabled: false },
  srcDir : resolve("./src"),

  components : {
    dirs : [],
  },

  modules : ["nuxt-icons"],

  css: [
    "~/assets/stylesheets/scss/_fonts.scss",
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/stylesheets/main.scss",
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use '~/assets/stylesheets/scss/_colors.scss' as *;
          @use '~/assets/stylesheets/scss/_breakpoints.scss' as *;`,
        },
      },
    },
  },

  nitro : {
    compressPublicAssets : true,
  },

  app : {
    head : {
      htmlAttrs : {
        lang : "fa",
        dir : "rtl",
      },
      title : "ویتامول",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    }
  }
})
