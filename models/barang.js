'use strict';
module.exports = (sequelize, DataTypes) => {
  var Barang = sequelize.define('Barang', {
    nama: DataTypes.STRING,
    stok: DataTypes.INTEGER,
    harga: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    }
  });
  
  return Barang;
};