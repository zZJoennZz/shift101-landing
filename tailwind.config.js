/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'section-one' : "url('/src/assets/img/section-one-background.png')",
        'section-one-shapes' : "url('/src/assets/img/section-one-shapes.png')",
        'section-two' : "url('/src/assets/img/section-two-background.png')",
        'section-two-shapes' : "url('/src/assets/img/section-two-shapes.png')",
      },
      colors: {
        "cyan" : {
          600 : "#1cb2bc",
        },
      },
    },
    
  },
  plugins: [],
}
