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
  darkMode: 'class',
  theme: {
    extend: {
        fontFamily: {
            sans: ['Inter', 'Arial', 'sans'],
            display: ['Poppins', 'sans'],
        },
        colors: {
            primary: '',
            secondary: '#42B883',
            light: {
                header: '#FFFFFF',
            },
            dark: {
                header: '#1A1A1A',
            }
        },
        height: {
            header: '64px'
        }
    },
  },
  plugins: [],
}
