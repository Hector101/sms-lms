'use strict';
module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    message: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    receiverId: DataTypes.INTEGER,
    senderId: DataTypes.INTEGER
  }, {});
  message.associate = function(models) {
    message.belongsTo(models.contact, {
      foreignKey: 'receiverId',
      as: 'receiver',
    });

    message.belongsTo(models.contact, {
      foreignKey: 'senderId',
      as: 'sender',
    });
  };
  return message;
};