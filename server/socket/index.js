const io = require('socket.io')()
// io.serveClient(false)

io.on('connection', (socket) => {
  console.info('...user connected...')
  socket.on('message', (msg) => {
    console.log('message recieved...')
    io.emit('message', msg)
  })
})

module.exports = io