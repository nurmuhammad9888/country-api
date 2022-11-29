/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth:{
        containerMain:"1312px"
      }
    },
    fontFamily:{
      Nunito:["'Nunito Sans'"]
    },
    boxShadow:{
      mainShadow:" 0px 2px 4px rgba(0, 0, 0, 0.0562443)",
      cardShadow:" 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384)"
    },
    colors:{
      mainColorBlack:"#111517",
      headerDarkColor:"#2B3844",
      bodyColordark:"#202C36",
      colorWhite:"#fff",
      colorBodyWite:"#fafafa"
    },
    backgroundPosition:{
      calc:"calc(5% + 15px) calc(5% + 20px)",
      calcInput:"calc(50% + 70px) calc(10% + 22px)"
    }
  },
  plugins: [],
}
