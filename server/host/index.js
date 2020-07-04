let express = require('express')

// Root host for Express server
// currently we have only one sub-application under this server
// basic webserver for serving Signatory web-app
let app = express()
app.use(express.json())
let web = require('../web')
let errors = require('../errors')

// Config for reverse proxy (Nginx container gateway)
app.set('trust proxy')

// Set destination directories
app.use('/', web)
app.use(errors)

// Export
module.exports = app