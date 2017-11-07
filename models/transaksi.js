'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaksi = sequelize.define('Transaksi', {
    username: DataTypes.STRING,
    idBarang: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER,
    totalHarga: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Transaksi;
};