/* eslint-env node */
module.exports = {
  plugins: [
    require('postcss-functions')({
      functions: {
        percentage: function (value, total) {
          return (parseFloat(value) / parseFloat(total)) * 100 + '%'
        }
      }
    }),
    require('postcss-import'),
    require('postcss-each-variables'),
    require('postcss-nested'),
    require('postcss-each')({
      plugins: {
        beforeEach: [require('postcss-for'), require('postcss-color-mix')]
      }
    }),
    require('autoprefixer')
  ]
}
