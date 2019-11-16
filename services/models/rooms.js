'use strict';
module.exports = (sequelize, DataTypes) => {
  const rooms = sequelize.define('rooms', {
    name: DataTypes.STRING,
    available: DataTypes.BOOLEAN,
    type: DataTypes.INTEGER

  }, {});
  rooms.associate = function(models) {
    // associations can be defined here
  };
  return rooms;
};