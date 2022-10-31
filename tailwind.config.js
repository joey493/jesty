module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        dark: '#111111',
        grayC: '#BDBDBD',
        light: '#F7F7F2',
        boldC: '#EB741D',
      },
    },
    screen: {
      sm: "375px",
      md: "480px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1536px",
    },
    fontFamily: {
      sansation: ["Sansation", "sans-serif"],
      "sansation-light": ["Sansation-Light", "sans-serif"],
      "sansation-bold": ["Sansation-Bold", "sans-serif"],
      Goldman: ["Goldman", "sans-serif"],
      "Goldman-bold": ["Goldman-Bold", "sans-serif"]
    },
  },
  plugins: [],
};
