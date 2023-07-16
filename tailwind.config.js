/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#0B0D17",
        primaryBlue: "#D0D6F9",
        primaryWhite: colors.white,
        primaryLight: "#383B4B",
      },
      fontFamily: {
        bellefair: ["Bellefair", ...defaultTheme.fontFamily.sans],
        barlowCondensed: [
          '"Barlow Condensed"',
          ...defaultTheme.fontFamily.sans,
        ],
        barlow: ["Barlow", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "home-desktop": "url(/assets/home/background-home-desktop.jpg)",
        "home-mobile": "url(/assets/home/background-home-mobile.jpg)",
        "home-tablet": "url(/assets/home/background-home-tablet.jpg)",
        "destination-desktop":
          "url(/assets/destination/background-destination-desktop.jpg)",
        "destination-tablet":
          "url(/assets/destination/background-destination-tablet.jpg)",
        "destination-mobile":
          "url(/assets/destination/background-destination-mobile.jpg)",
        "crew-desktop": "url(/assets/crew/background-crew-desktop.jpg)",
        "crew-tablet": "url(/assets/crew/background-crew-tablet.jpg)",
        "crew-mobile": "url(/assets/crew/background-crew-mobile-bitmap.png)",
        "technology-desktop": "url(../public/assets/technology/Bitmap.jpg)",
        "technology-tablet":
          "url(/assets/technology/background-technology-tablet.jpg)",
        "technology-mobile":
          "url(/assets/technology/background-technology-mobile.jpg)",
      },
      letterSpacing: {
        primary: "0.16875em",
        secondary: "0.0625em",
      },
      fontSize: {
        "2.5xl": "28px",
      },
      screens: {
        lg: "1024px",
      },
      lineHeight: {
        primary: 1.15,
      },
    },
  },
  plugins: [],
};
