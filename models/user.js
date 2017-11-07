'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });
  User.associate = models => {
    User.hasOne(models.Profil)
    User.hasMany(models.Transaksi)
  }
  User.beforeCreate((user, options) => {
    const saltRounds = 12;
    const myPlaintextPassword = user.password;
    return  bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
      user.password = hash
    });
  });
  return User;
};