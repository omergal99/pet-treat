const dogsService = require('../services/dogs-service.js')

// function checkAdmin(req, res, next) {
//     console.log('INSIDE MIDDLEWARE: ', req.session.user);
//     if (!req.session.user || !req.session.user.isAdmin ) {
//         res.status(401).end('Unauthorized');
//         return;
//     }
//     next();
// }

// DOGS REST API:
function dogsRoute(app) {
  // LIST
  app.get('/dogs', (req, res) => {
    console.log('req body', req.body)
    dogsService.query(req.query)
      .then(dogs => res.json(dogs))
      .catch(err => console.log('err2', err))
  })

  // SINGLE - GET Full details
  app.get('/dogs/:dogId', (req, res) => {
    const dogId = req.params.dogId;
    dogsService.getById(dogId)
      .then(dog => res.json(dog))
      .catch(err => console.log('err5', err))
  })

}

module.exports = dogsRoute;