// settings
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')
const ws = require('ws');



////////////////////////
const server = app.listen(port, () => {
  console.log(`[[[ Websocket app listening at http://localhost:${port}`)
});

// Set up a headless websocket server that prints any
// events that come in.
const wsServer = new ws.Server({ server })
wsServer.on('connection', socket => {
  console.log('[[[ wsServer.on connection ');

  socket.on('message', message => {
    console.log('[[[ socket.on message: ', message);

    wsServer.clients.forEach(function each(client) {
      if (client.readyState === ws.OPEN) {
        setTimeout(function () {
          const message = {
            "source": "server",
            "content": "response from server",
            "message": mesasge
          }
          const data = Buffer.from(JSON.stringify(message))
          client.send(data, { binary: false });
          console.log('[[[ client.send', message);
        }, 1000);
      }
    });
  });
});

server.on('upgrade', (request, socket, head) => {
  console.log('[[[ server.on upgrade');
  wsServer.handleUpgrade(request, socket, head, socket => {
    wsServer.emit('connection', socket, request);
  });
});
////////////////////////

// require routes
// const routes = require('./routes')

// // require Todo
// const { urlencoded } = require('body-parser')
// app.use(cors())
// app.use(methodOverride('_method'))
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(routes)
// app.listen(port, () => {
//   console.log(`The app is listening on http://localhost:${port}.`)
// })
