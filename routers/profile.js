const express = require('express')
const router = express.Router()
const db = require('../models');

const checkLogin = require('../helpers/checkLogin');

router.get('/create', checkLogin, (req, res) => {
  res.render('editprofile', {profileData : null})
})

router.post('/create', (req, res) => {
  db.Profil.create({
    nama: req.body.nama,
    alamat: req.body.alamat,
    telp: req.body.telp,
    gender: req.body.gender,
    username: req.session.username,
    email: req.session.email
  })
  .then(success => {
    res.redirect('/items')
  })
  .catch(error => {
    console.log(error);
  })
})

router.get('/edit', checkLogin, (req, res) => {
  console.log(`di profile ======================== ${JSON.stringify(req.session)}`);
  db.Profil.findOne({
    where: {
      username: req.session.username
    }
  })
  .then(profileData => {
    res.render('editprofile', {profileData})
  })
})

router.post('/edit', (req, res) => {
  db.Profil.findOne({
    where: {
      username: req.session.username
    }
  })
  .then(profileData => {
    profileData.update(req.body)
    .then(success => {
      res.redirect('/items')
    })
  })
})

module.exports = router;