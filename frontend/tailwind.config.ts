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
            gloom: '#170C0C',
            essence: '#C3C3C3',
            error: '#EB0C0C',
            light: {
                header: '#FFFFFF',
                text: '#1F1F1F',
            },
            dark: {
                header: '#1A1A1A',
                text: '#F3F3F3',
            }
        },
        height: {
            header: '64px'
        }
    },
  },
  plugins: [],
}
