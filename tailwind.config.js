module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-1": "#131921",
        "yellow-1": "#cd9042",
        "yellow-2": "#ffd814",
        "hover-yellow": "#debc12",
        "top-color": "#a88734",
        "x-color": "#9c7e31",
        "bottom-color": "#846129",
      },
      zIndex: {
        "1": "1",
        "100": "100",
      },
      height: {
        "400": "400px",
        "700": "700px",
      },
      width: {
        "100": "100px",
        "408": "408px",
        "700": "700px",
      },
      borderWidth: {
        "1": "1px",
      }
    },
  },
  plugins: [],
}
