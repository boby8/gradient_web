/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        helveticaNeueRegular: ["HelveticaNeueRegular", "Inter"],
        helveticaNeueMedium: ["HelveticaNeueMedium", "Inter"],
      },
      screens: {
        xxsm: { min: "300px", max: "380px" },
        // => @media (min-width: 300px and max-width: 380px) { ... }

        xsm: { min: "300px", max: "640px" },
        // => @media (min-width: 300px and max-width: 640px) { ... }

        smallMobile: { min: "300px", max: "380px" },
        // => @media (min-width: 300px and max-width: 380px) { ... }

        mobile: { min: "300px", max: "640px" },
        // => @media (min-width: 300px and max-width: 640px) { ... }

        tablet: { min: "640px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        mdpiScreen: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        hdpiScreen: { min: "1024px", max: "1349px" },
        // => @media (min-width: 1024px and max-width: 1349px) { ... }

        largeScreen: { min: "1350px", max: "1650px" },
        // => @media (min-width: 1350px and max-width: 1650px) { ... }

        extraLargeScreen: { min: "1651px" },
        // => @media (min-width: 1651px) { ... }
      },
      colors: {
        'primary-blue': '#1A56DB',
      }
    },
  },
  plugins: [],
};
