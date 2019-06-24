

function socketRoute(io) {

  io.on('connection', socket => {

    console.log('an user connected');

    socket.on('disconnect', function () {
      console.log('user disconnected');
    });

    socket.on('msg sent', (txt, date, from) => {
      console.log('we got msg:', txt, 'from', from, 'at', date)
      io.emit('chat new msg', txt, date, from);
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
