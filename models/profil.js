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
    username: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    }
  });
  Profil.associate = models => {
    Profil.belongsTo(models.User, {foreignKey: 'username', targetKey: 'username'})
  }
  return Profil;
};