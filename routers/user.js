var express = require('express');
var router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', (req, res) => {
  db.User.create({
    username: req.body.username,
    password: req.body.password
  })
  .then(function(result){
    res.redirect('/users/login')
  })
  .catch(function(err){
    console.log(err);
    res.render('register')
  })
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', function(req, res){
  db.User.findOne({
    where: {
      username: req.body.username
    }
  }).then(function(user){
    if(user){
      bcrypt.compare(req.body.password, user.password).then(function(result) {
        if (result) {
          // req.session.loggedIn = true
          // req.session.username = user.username
          res.send('berhasil login')
        }else{
          res.render('login')
        }
      })
    }else{
      res.render('login')
    }
  })
})

module.exports = router;