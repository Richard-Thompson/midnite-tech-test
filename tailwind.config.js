module.exports = {
  mode: 'jit',
  content: [
    './src/components/**/*.{js,jsx,mdx}',
    './public/index.html',
    './src/*.{js,jsx,mdx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Roboto', 'sans-serif'],
      material: ['Material Icons', 'sans-serif'],
    },
    container: {
      center: true,
      screens: {
        sm: '376px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1920px',
      },
      padding: {
        DEFAULT: '20px',
        sm: '20px',
        md: '60px',
        lg: '100px',
        xl: '100px',
        '2xl': '140px',
      },
    },
    extend: {
      colors: {
        black: {
          100: '#0A0203',
        },
        purple: {
          100: '#5258cc',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
