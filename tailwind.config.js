/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "card": "0 35px 60px -15px rgba(0, 0, 0, 0.3)"
      },
    },
    maxWidth: {
      'desktop': '1024px',
      'tablet': '768px',
      'mobile': '360px',
    },
    keyframes: {
      textflicker: {
        from: {
          'text-shadow': '1px 0 0 #ea36af, -2px 0 0 #75fa69',
        },
        to: {
          'text-shadow': '2px 0.5px 2px #ea36af, -1px -0.5px 2px #75fa69',
        },
      },
    },
    animation: {
      'textflicker': 'textflicker 0.01s infinite alternate',
    },
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
// #87D0E0