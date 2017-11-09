const express = require('express')
const router = express.Router()
const db = require('../models')

const Mail = require('../emailSender')
const checkLogin = require('../helpers/checkLogin');


router.get('/:id', (req, res) => {
  db.Barang.findById(req.params.id)
  .then(barang => {
    res.render('transaksi', {
      barang : barang,
      loggedIn : req.session
    })
  })
  .catch(error => {
    console.log(error);
    res.redirect("/items")
  })
})

router.post('/confirm', checkLogin, (req, res) => {
  db.Barang.findById(req.body.idBarang)
  .then(barang => {
    if ((barang.stok - req.body.jumlah) > 0) {
      db.Transaksi.create({
        username : req.session.username,
        idBarang : req.body.idBarang,
        jumlah : req.body.jumlah,
        totalHarga : (barang.harga * req.body.jumlah)
      })
      .then(hasil => {
        barang.update({
          stok : (barang.stok - req.body.jumlah)
        })
      })
      .then(sendMail => {
        let mail = new Mail(req.session.email, {
          name: barang.nama,
          jumlah: req.body.jumlah,
          total: (barang.harga * req.body.jumlah)
        })
        mail.send()
        res.redirect('/items')
      })
    }
    else {
      console.log("stok kurang");
    }
  })
  .catch(error => {
    console.log(error);
  })
})

module.exports = router;