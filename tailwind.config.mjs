// tailwind.config.mjs
export default {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      utilities: {
        'no-visited': {
          '&:visited': {
            color: 'inherit',
            textDecoration: 'none',
          },
        },
      },
    },
  },
  plugins: [],
}