const express = require('express')
const path = require('path')

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Error: Resource not found
app.use((_req, _res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Default Error

// Dev -- prints with stacktrace
if (app.get('env') === 'development') {
  app.use((err, _req, res, _next) => {
    res.status(err.status || 500)
    res.render('error', {
      message: this.$t('errors.' + err.message),
      error: err
    })
  })
// Prod - no stacktrace
} else {
  app.use((err, _req, res, _next) => {
    res.status(err.status || 500)
    res.render('error', {
      message: this.$t('errors.' + err.message),
      error: {}
    })
  })
}

// export

module.exports = app
