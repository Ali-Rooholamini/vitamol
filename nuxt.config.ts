import { resolve } from "path"

export default defineNuxtConfig({
  devtools: { enabled: false },
  srcDir : resolve("./src"),

  components : {
    dirs : [],
  },

  ssr : false,

  modules : ["nuxt-icons" , '@nuxt/image', '@pinia/nuxt'],

  image : {
    quality : 80,
    format : ["webp , avif" , "jpeg"],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },

  pinia : {
    storesDirs: ["./src/stores"],
  },

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
