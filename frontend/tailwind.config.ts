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
    extend: {
        fontFamily: {
            sans: ['Inter', 'Arial', 'sans'],
            display: ['Poppins', 'sans'],
        },
        colors: {
            light: {
                header: '#ebeef5'
            },
            dark: {
                header: '#40423d'
            },
            custom: {
                header: '#1a592f'
            }
        },
        height: {
            header: '64px'
        }
    },
  },
  plugins: [],
}
