const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');

router.get('/register', (req, res) => {
  res.render('register', {msg : null})
})

router.post('/register', (req, res) => {
  db.User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  })
  .then(function(result){
    res.redirect('/items')
  })
  .catch(function(err){
    console.log(err);
    res.render('register', {msg : err})
  })
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
          req.session.loggedIn = true
          req.session.username = user.username
          req.session.userId = user.id
          req.session.email  = user.email
          db.Profil.findOne({
            where: {
              username: req.body.username
            }
          })
          .then(result => {
            if (result != null) {
              res.redirect('/items')
            }
            else {
              res.redirect('/profiles/create')
            }
          })
        }
      })
    }
    else {
      res.redirect('/items')
    }
  })
})

router.get('/logout', (req, res) => {
  req.session = null
  console.log(`================================ ${req.session}`);
  res.redirect('/items')
})

module.exports = router;