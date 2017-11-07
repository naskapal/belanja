'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaksi = sequelize.define('Transaksi', {
    username: DataTypes.STRING,
    idBarang: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER,
    totalHarga: DataTypes.INTEGER
  });
  Transaksi.associate = models => {
    Transaksi.hasMany(models.Barang)
  }
  return Transaksi;
};