/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '350px',
      sm: '480px',
      md: '650px',
      lg: '800px',
      xl: '976px',
      xxl: '1200px',
      xxxl: '1440px',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '0.5px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#bc4123',
        secondary: {
          100: '#2b3452',
          200: '#fff'
        },        
        skill: '#00000033',
        
      },
      fontSize: {
        base: '18px',
        small: '9px',
        xsmall: '6px'
      },
      fontFamily: {
        lora: ['Lora'],  
        roboto: ['Roboto']    
      },
      spacing: {
        '29': '7.45rem',
        '38': '9.5rem',
        '46': '11.5rem',
        '100': '26.9rem',
        '103': '28rem',
        '105': '30rem',
        '110': '33rem',
        '120': '35rem',
        '125': '37.5rem',
        '130': '42rem',
        '133': '43.5rem',
        '135': '44rem',
        '150': '53rem',
        '160': '58rem',
        '170': '65rem',
        '8/10': '92%',
        '9/10': '95%',
      },
      borderRadius: {
        '4xl': '30px'
      },
      maxWidth: {
        small: '10rem'
      },
      textDecorationThickness: {
        3: '3px',
      }
    },
  },
  plugins: [],
}
