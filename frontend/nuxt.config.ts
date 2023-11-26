// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    components: [
    {
      path: '~/components',
      global: true,
      pathPrefix: false
    },
  ],
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        'nuxt-icon',
        '@nuxtjs/i18n',
        'nuxt-vue3-google-signin'
    ],
    runtimeConfig: {
        clientId: process.env.GOOGLE_CLIENT_ID,
    },
    colorMode: {
        classSuffix: '',
      },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.ts',
    },
    i18n: {
        strategy: 'prefix',
        lazy: true,
        langDir: 'locales',
        vueI18n: './i18n.config.ts',
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            name: 'English',
            file: 'en.json',
            isCatchallLocale: true,
          },
          {
            code: 'tr',
            iso: 'tr',
            name: 'Turkish',
            file: 'tr.json',
          }
      ],
    },
    googleSignIn: {
        clientId: process.env.GOOGLE_CLIENT_ID,
    }
})
