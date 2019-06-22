const dogsService = require('../services/dogs-service.js')

// function checkAdmin(req, res, next) {
//     console.log('INSIDE MIDDLEWARE: ', req.session.user);
//     if (!req.session.user || !req.session.user.isAdmin ) {
//         res.status(401).end('Unauthorized');
//         return;
//     }
//     next();
// }
let users = [
  {
    id: '1',
    username: 'Robin Wieruch',
  },
  {
    id: '2',
    username: 'Dave Davids',
  },
];
// res.send(Object.values(users))
// res.json(users)

function dogsRoute(app) {
  // DOGS REST API:

  // LIST
  app.get('/dogs', (req, res) => {
    console.log('req body', req.body)
    dogsService.query(req.query)
      .then(dogs => res.json(dogs))
      .catch(err => console.log('err2', err))
  })
}

module.exports = dogsRoute;