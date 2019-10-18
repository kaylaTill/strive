var express = require('express');
var router = express.Router();
var path = require('path');
const Sequelize = require('sequelize');
const quotes = require('../models/quotes.js');
const users = require('../models/users.js');
const objectives = require('../models/objectives.js');
var session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../../strive_frontend/dist/index.html'));
});



//register=> post new user
router.post('/register', function (req, res, next) {
  users.User.findAll({ 
    where: Sequelize.or(
      {email: req.body.email},
      {username: req.body.username}
    )
  })

  .then((results) => {
    if (results.length == 0) {
      bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        users.User.create({
          email: req.body.email,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          username: req.body.username,
          password: hash
        })
        .then((user)=> {
          req.session.user = user;
          req.session.save((err) => {
            if (err) {
              console.log(err);
            }
            res.sendStatus(200);
          })
          console.log('Succesful session created for new user!');
        })
        .catch(function(err) {
          console.log(`Hash Error: ${err}`);
        })
      });
    } else {
      console.log('Invalid Registration');
      res.sendStatus(401);
    }
  })
    .catch((err) => {
      console.log(err);
    });
});


router.post('/login', function (req, res, next) {
  users.User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then((user)=> {
    if (!user) {
      res.sendStatus(401);
      console.log("Sorry, couldn't find a user under that username!");
    } else {

      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result == true) {
          //store cookies for user login
          req.session.user = user;
          req.session.save((err) => {
            if (err) {
              console.log(err);
              // console.log(req.session);
            }
            res.send('Logged In');
          });
        } else {
          res.sendStatus(401);
          console.log('Incorrect password, Please try again!');
        }
      });
    }
  });
});


// testing cookie connection
router.get('/loggedIn', function(req, res, next) {
  if (req.session.user) {
    console.log(`Succesful session for ${req.session.user}`);
    return res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

router.get('/logout', (req, res, next) => {
  req.session.destroy((success, err) => {
    if (err) {
      return res.sendStatus(404)
    }
  })
  return res.sendStatus(200);
})


// USER HOME ROUTES

//GET a single quote each time we login
router.get('/quote', function (req, res, next) {
  var rand_id = Math.floor(Math.random() * 51) + 1;
  quotes.Quote.findOne({ where: { id: rand_id } }).then(quote => {
    res.json(quote);
  })
});



router.post('/addObjective', (req, res, next) => {
  //set user to user_id => foreign key
  var user = req.session.user.username;
  var requestData = req.body;
  users.User.findOne({
    where: {
      username: user
    }
  })
  .then((result) => {
    objectives.Objective.create({
      name: requestData.name,
      description: requestData.description,
      timeSpan: requestData.timeSpan,
      keyResult1: requestData.keyResult1,
      keyResult2: requestData.keyResult2,
      keyResult3: requestData.keyResult3,
      keyResult4: requestData.keyResult4,
      keyResult5: requestData.keyResult5,
      user_id: result.id
    })
    .then(() => {
      console.log('addded');
    })
    .catch((error) => {
      console.log(error);
    })
  })
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(404);
  });
})

router.get('/getUserObjectives', (req, res, next) => {
  var user = req.session.user.username;
  users.User.findOne({
    where: {
      username: user
    }
  })
  .then((result) => {
    objectives.Objective.findOne({
      where: {
        user_id: result.id
      }
    })
    .then((result) => {
      res.send(result);
      console.log('found user objectives');
    })
    .catch((error) => {
      console.log(error);
    })
  })

}) 



module.exports = router;