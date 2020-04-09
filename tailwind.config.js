const { fontFamily } = require('tailwindcss/defaultTheme');
const tuiColors = require('@tailwindcss/ui/colors');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: tuiColors.indigo['50'],
          100: tuiColors.indigo['100'],
          200: tuiColors.indigo['200'],
          300: tuiColors.indigo['300'],
          400: tuiColors.indigo['400'],
          500: tuiColors.indigo['500'],
          600: tuiColors.indigo['600'],
          700: tuiColors.indigo['700'],
          800: tuiColors.indigo['800'],
          900: tuiColors.indigo['900'],
          default: tuiColors.indigo['600'],
        },
        danger: tuiColors.red['600'],
        success: tuiColors.green['600'],
        muted: tuiColors.gray['50'],
        light: tuiColors.gray['50'],
        dark: tuiColors.gray['800'],
      },
      boxShadow: {
        'outline-primary': tuiColors.indigo['600'],
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
  important: true,
}