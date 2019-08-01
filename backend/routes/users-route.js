const usersService = require('../services/users-service.js')

// function checkAdmin(req, res, next) {
//     console.log('INSIDE MIDDLEWARE: ', req.session.user);
//     if (!req.session.user || !req.session.user.isAdmin ) {
//         res.status(401).end('Unauthorized');
//         return;
//     }
//     next();
// }

// DOGS REST API:
function usersRoute(app) {

  // CREATE
  app.post(`/users/signup`, (req, res) => {
    const userNameCode = req.body
    // console.log('userNameCode', userNameCode)
    userNameCode.name.toLowerCase()
    usersService.addUser(userNameCode)
      .then(user => {
        req.session.loggedInUser = user
        res.json(user)
      })
    // return res.json(userNameCode)
  })

}

module.exports = usersRoute;