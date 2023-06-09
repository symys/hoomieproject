/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
     
      fontFamily: {
        montserrat: ["Montserrat"],
        lilita: ["Lilita One"],
        bakbak: ["Bakbak One"],
      },
      colors: {
        dark1: "#272B34",
        dark2: "#6E7487",
        dark3: "#B2B5BA",
        light1: "#F3F2F7",
        light2: "#EDEBF1",
        light3: "#DFE4FA",
        error: "#EE5142",
        info: "#46C275",
      },
      backgroundImage: {
        landing:
          "url('/home/seymademir/Development/code/React/hoomieproject/src/images/landingPageBg.jpg')",
          "pinkbg":'url("/home/seymademir/Development/code/React/hoomieproject/src/images/pinkthanks.jpeg")',
      },
    },
  },
  plugins: [],
};
