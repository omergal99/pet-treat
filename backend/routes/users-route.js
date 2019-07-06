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
    const userNamePass = req.body
    console.log('userNamePass', userNamePass)
    // userNamePass.name.toLowerCase()
    // userService.addUser(userNamePass)
    //   .then(user => {
    //     req.session.loggedInUser = user
    //     res.json(user)
    //   })
    return res.json(userNamePass)
  })

}

module.exports = usersRoute;