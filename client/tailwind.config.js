/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      orka  : ['CCArea51Industrial', 'Helvetica', 'Arial', 'sans-serif'],
      lato  : ['Lato', 'Helvetica', 'Arial' , 'sans-serif'],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      maliki:['Hello Headline W00 Regular'],
      swap:['Protest Riot'],
    },
    extend: {
      dropShadow: {
        '3xl':[ '6px 6px 10px palevioletred;'],
        
        
      }
    },
  },
  plugins: [],
}

