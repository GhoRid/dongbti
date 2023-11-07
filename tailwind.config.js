/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "fffaef":"fffaef",
        "be3556": "be3556",
      },
      backgroundImage: {
        "startPageBgImg" : "url('./public/images/startPageBgImg.png')",
      },
      dropShadow: {
        "textBorder": "0 35px 35px rgb(0, 0, 0)"
      }

    },
  },
  plugins: [],
}

