/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: { 
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },

    colors:{
      blue: {
        100:"#E0E2E9",
        200:"#B1CADE",
        DEFAULT:"#83ABDE",
      },
      white: {
        DEFAULT: "#ffffff",
        100: "#F7F7F7",

      },
      
      primary: { 
        200: "#A9DE9C",
        300: "#8CDF77",
        400: "#75DF5B",
        DEFAULT: "#426B1F",
        600: "#82CD41",
      },
      secondary: { 
        200: "#F0FFF0",
        300: "#D6FFD6",
        400: "#D6FFD6",
        DEFAULT: "#94FF94",
        600: "#A0FF4F",
      },
      gray: { 
        100: "#fafafa",
        200: "#80877E",
        300: "#323D2F",
        400: "#374F30",
        DEFAULT: "#000000",
        600: "#8c929d",
        700: "#111213",
      },
      back: {
        DEFAULT: "#E5E7EB",
      },
      alert : {
        danger: "#FF4E4E",
        success: "#90DA1",
        warning:"#FEB72F",
      }
    },

    fontSize: {
    '8xl': ['120px', {
      lineHeight: '120px',
      letterSpacing: '-6px',
      fontWeight: '500',
    }],

    '7xl': ['72px', {
      lineHeight: '80px',
      letterSpacing: '-4.5px',
      fontWeight: '600',
    }],

    '6xl': ['55px', {
      lineHeight: '60px',
      letterSpacing: '-2.5px',
      fontWeight: '500',
    }],

    '5xl': ['48px', {
      lineHeight: '54px',
      letterSpacing: '-1.6px',
      fontWeight: '500',
    }],

    '4xl': ['36px', {
      lineHeight: '44px',
      letterSpacing: '-1.2px',
      fontWeight: '500',
    }],

    '3xl': ['28px', {
      lineHeight: '34px',
      letterSpacing: '-0.8px',
      fontWeight: '500',
    }],

    '2xl': ['24px', {
      lineHeight: '30px',
      letterSpacing: '-1px',
      fontWeight: '400',
    }],

    xl: ['24px', {
      lineHeight: '30px',
      letterSpacing: '-1px',
      fontWeight: '400',
    }],

    lg: ['21px', {
      lineHeight: '30px',
      letterSpacing: '-0.8px',
      fontWeight: '400',
    }],

    base: ['17px', {
      lineHeight: '25px',
      letterSpacing: '-0.6px',
      fontWeight: '400',
    }],

    sm: ['15px', {
      lineHeight: '23px',
      letterSpacing: '-0.6px',
      fontWeight: '400',
    }],

    caption1: ['20px', {
      lineHeight: '24px',
      letterSpacing: '-0.6px',
      fontWeight: '400',
    }],

    caption2: ['18px', {
      lineHeight: '20px',
      letterSpacing: '-0.3px',
      fontWeight: '400',
    }],

    caption3: ['16px', {
      lineHeight: '16px',
      letterSpacing: '-0.5px',
      fontWeight: '400',
    }],


    },
    borderRadius: {
      DEFAULT: '10px',
      full: "9999px",
    },
    extend: {},
  },
  plugins: [],
}

