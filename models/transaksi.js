'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaksi = sequelize.define('Transaksi', {
    username: DataTypes.STRING,
    idBarang: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER,
    totalHarga: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    }
  });
  Transaksi.associate = models => {
    Transaksi.belongsTo(models.Barang, {foreignKey : 'idBarang'})
    Transaksi.belongsTo(models.User, {foreignKey : 'username'})
  }
  return Transaksi;
};