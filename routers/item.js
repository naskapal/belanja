var express = require('express')
var router = express.Router()
const db = require('../models');

router.get('/', (req, res) => {
  res.render('items')
})

router.get('/add', (req, res) => {
  res.render('addItem')
})

router.post('/add', (req, res) => {
  db.Barang.create(req.body)
  .then(success => {
    res.redirect('/items')
  })
  .catch(error => {
    console.log(err);
    res.render('items')
  })
})

module.exports = router;