const dogsService = require('../services/dogs-service.js')

function socketRoute(io) {

  io.on('connection', socket => {

    console.log('an user connected');

    socket.on('disconnect', function () {
      console.log('user disconnected');
    });

    socket.on('msg sent', (from, txt, date) => {
      console.log('we got msg:', txt, 'from', from, 'at', date);
      dogsService.addMsg('5d1e284dba30b944ba076387', { fromUserName: from, text: txt, dateCreated: date })
      io.emit('chat new msg', from, txt, date);
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
