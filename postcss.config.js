module.exports = ({ env, file }) => ({
    plugins: {
        'postcss-import': {},
        'tailwindcss': {},
        'postcss-nested': {},
        'autoprefixer': {},
        'cssnano': env === 'production' ? {} : false,
    },
});