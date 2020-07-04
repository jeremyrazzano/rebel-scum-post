const express = require('express')
const path = require('path')
const parser = require('body-parser')
const history = require('connect-history-api-fallback') // History mode: https://github.com/bripkens/connect-history-api-fallback

let webserver = express()
webserver.use(parser.json())
webserver.use(parser.urlencoded({ extended: false }))
webserver.use(history())
webserver.use(express.static(path.join(__dirname, 'public')))

module.exports = webserver