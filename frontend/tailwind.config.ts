/** @type {import('tailwindcss').Config} */
export default {
  content: [
      '~/components/**/*.{vue,js,ts}',
      '~/layouts/**/*.vue',
      '~/pages/**/*.vue',
      '~/composables/**/*.{js,ts}',
      '~/utils/**/*.{js,ts}',
      '~/nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
