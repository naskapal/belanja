'use strict';
module.exports = (sequelize, DataTypes) => {
  var Profil = sequelize.define('Profil', {
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    gender: DataTypes.STRING,
    telp: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate : {
        isEmail: true
      }
    },
    username: DataTypes.STRING
  });
  Profil.associate = models => {
    Profil.belongsTo(models.User)
  }
  return Profil;
};