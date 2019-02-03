'use strict';
module.exports = (sequelize, DataTypes) => {
  const contact = sequelize.define('contact', {
    name: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {});
  contact.associate = function(models) {
    contact.hasMany(models.message, {
      foreignKey: 'receiverId',
      onDelete: 'NO ACTION',
      hooks: true,
    });

    contact.hasMany(models.message, {
      foreignKey: 'senderId',
      onDelete: 'CASCADE',
      hooks: true,
    });
  };
  return contact;
};