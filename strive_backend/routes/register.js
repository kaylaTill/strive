var express = require('express');
var router = express.Router();

const users = require('../models/users.js');


//login
// router.post('/register', function (req, res, next) {

// });


// //register
// router.post('/register', function (req, res, next) {
//     console.log(request.body);
//     // users.User.create({
//     //     first_name: request.body.first_name,
//     //     last_name: request.body.last_name,
//     //     email: request.body.email,
//     //     username: request.body.username,
//     //     password: request.body.password
//     // })
//     //     .then(() => {
//     //         res.sendStatus(201).end()
//     //     });
// });


module.exports = router;
