module.exports = {

 
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {
      animation:['group-hover'],
    }
  },
  theme:{
    colors:{
      transparent:'transparent',
      current:'currentColor',
      gray:{
        DEFAULT:'#9CA3AF'
      },
      white:{
        DEFAULT:'#F9FAFB'
      },
      myBlue:{
        light:'#0c1e2b',
        DEFAULT:'#0c1e2b'
      }
    },
   extend:{
      screens:{
        "3xl": "2000px",
      },
    },
    
  },
  plugins:[
    require("tailwind-scrollbar-hide")
  ],
}