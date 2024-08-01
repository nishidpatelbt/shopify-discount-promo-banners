/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    './**/*.liquid',
    './frontend/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'scribbles': ['Scribbles AF W00 Chunky', 'sans-serif'],
      },
      fontSize: {
        '14to20': 'clamp(0.875rem, 0.7981rem + 0.3846vw, 1.25rem);'
      },
      spacing: {
        '14to24': 'clamp(0.875rem, 0.7468rem + 0.6410vw, 1.5rem);'
      },
    },
  },
  plugins: []
}
