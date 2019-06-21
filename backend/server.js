const express = require('express');
const app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

const socketRoute = require('./routes/socketRoute')

app.use(express.static('public'));

socketRoute(io)

const port = process.env.PORT || 9090;
http.listen(port, () => console.log(`server on *:${port}`));