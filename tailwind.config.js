/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_posts/**/*.{html,js}',
    './_drafts/**/*.{html,js}',
    './_layouts/**/*.{html,js}',
    './*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}

