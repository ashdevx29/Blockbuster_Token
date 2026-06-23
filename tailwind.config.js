// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],

//   theme: {
//     extend: {

//       // Responsive Breakpoints
//       screens: {
//         phone: { max: "550px" },
//         tablet: { max: "768px" },
//         laptop: { max: "1024px" },
//         desktop: { max: "1200px" },
//       },

//       // Custom Animation
//       animation: {
//         float: "float 5s ease-in-out infinite",
//       },

//       // Keyframes
//       keyframes: {
//         float: {
//           "0%, 100%": {
//             transform: "translateY(0px)",
//           },

//           "50%": {
//             transform: "translateY(-15px)",
//           },
//         },
//       },

//     },
//   },

//   plugins: [],
// };









module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      animation: {
        float: "float 5s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-15px)",
          },
        },
      },
    },
  },

  plugins: [],
};