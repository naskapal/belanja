var express = require('express')
var router = express.Router()
const db = require('../models')

router.get('/:id', (req, res) => {
  db.Barang.findById(req.params.id)
  .then(barang => {
    res.render('transaksi', {barang, idbarang : req.params.id})
  })
})

router.post('/confirm', (req, res) => {
  db.Barang.findById(req.body.idBarang)
  .then(barang => {
    db.Transaksi.create({
      username : req.body.username,
      idBarang : req.body.idBarang,
      jumlah : req.body.jumlah,
      totalHarga : (barang.harga * req.body.jumlah)
    })
    .then(hasil => {
      console.log(hasil);
      res.send(hasil);
    })
  })
  .catch(error => {
    console.log(error);
  })
})

module.exports = router;