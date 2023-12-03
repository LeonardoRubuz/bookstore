/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      'black': "#000000",
      'white' : '#ffffff',
      'stone' : '#d6d3d1',
    }
  },
  plugins: [],
}

