const dogsService = require('../services/dogs-service.js')

function socketRoute(io) {

  io.on('connection', socket => {

    console.log('an user connected');

    socket.on('disconnect', function () {
      console.log('user disconnected');
    });

    socket.on('msg sent', msg => {
      console.log('we got msg:', msg.text, 'from', msg.fromUserName, 'at', msg.dateCreated);
      dogsService.addMsg('5d1e284dba30b944ba076387', msg)
      io.emit('chat new msg', msg);
      socket.broadcast.emit('chat new notification', msg);
    });

    socket.on('user type', (user) => {
      if (user) {
        console.log('user type something:', user)
        io.emit('other user type', user);
      } else {
        io.emit('other user type', '');
      }
    });

  });
}

module.exports = socketRoute;
