'use strict';
module.exports = (sequelize, DataTypes) => {
  var Barang = sequelize.define('Barang', {
    nama: DataTypes.STRING,
    stok: {
      type: DataTypes.INTEGER,
      validate : {
        min: 0
      }
    },
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