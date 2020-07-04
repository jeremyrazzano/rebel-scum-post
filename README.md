# rebel-scum-post

A simple project I started to learn how to use [websockets](https://en.wikipedia.org/wiki/WebSocket) and the amazing
[socket.io](https://socket.io/) library. This is intended to be a simple chat application, with (what I hope is) a
somewhat retro look of old dial-up BBS systems.

The backend is a simple Node/Express server. The frontend uses [Vue.js](https://vuejs.org) via the [Quasar](quasar.dev) framework. In the first pass, I still rely on the Options-based API of Vuejs, but I intend to move to the new
[Composition API](https://composition-api.vuejs.org/) in a later update.

As it stands right now, this project only works via the `npm run dev` script in the root directory (which starts the 
server and boots up the client in `dev` mode).

## Directory Structure
`/server` contains the files for the server

`/client` contains the files for the client front-end