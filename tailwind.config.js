/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        '400': '4',
        '375': '3.75',
        '350': '3.5',
        '325': '3.25',
        '300': '3',
        '275': '2.75',
        '250': '2.5',
        '225': '2.25',
        '200': '2',
        '150': '1.5',
        '125': '1.25',
        '100': '1',
        '75': '.75',
        '50': '.5',
        '25': '.25',

      },
      spacing: {
        200: "50rem",
        175: "43.75rem",
        150: "37.5rem",
        125: "31.25rem",
        100: "25rem",
        75: "18.75rem",
        50: "12.5rem",
        30: "7.5rem",
        25: "6.25rem",
      },
      margin: {
        5: "5rem"
      },
      backgroundImage: {
        apple: 'url("./assets/mac.png")',
        windows: 'url("./assets/windows.png")',
        linux: 'url("./assets/linux.png")',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
