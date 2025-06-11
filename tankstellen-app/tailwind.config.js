/** @type {import('tailwindcss').Config} */
export default {
  screens: {
    // funktioniert noch nicht
    xs: '480px',     // selbst definierter extra kleiner Breakpoint
    sm: '600px',     // ersetzt Tailwinds Standard sm (normal 640px)
    md: '800px',     // ersetzt md (normal 768px)
    lg: '1066px',    // ersetzt lg (normal 1024px)
    xl: '1280px',
  },
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
