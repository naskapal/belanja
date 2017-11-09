const express = require('express')
const router = express.Router()
const db = require('../models');

router.get('/', (req, res) => {
  db.Barang.findAll()
  .then(items => {
    res.render('store', {items})
  })
  .catch(error => {
    console.log(error);
  })
})

router.get('/add', (req, res) => {
  res.render('addItem')
})

router.get('/purchase/:id', (req, res) => {
  db.Barang.findById(req.params.id)
  .then(item => {
    res.render('barang', {item})
  })
  .catch(error => {
    console.log(error);
  })
})

router.get('/edit/:id', (req, res) => {
  db.Barang.findById(req.params.id)
  .then(item => {
    res.render('editbarang', {item})
  })
  .catch(error => {
    console.log(error);
  })
})

router.post('/edit/:id', (req, res) => {
  db.Barang.findById(req.params.id)
  .then(item => {
    item.update(req.body)
    .then(success => {
      res.redirect(`/items/${id}`)
    })
  })
  .catch(error => {
    console.log(error);
  })
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