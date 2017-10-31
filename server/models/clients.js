'use strict';
module.exports = (sequelize, DataTypes) => {
  const clients = sequelize.define('clients', {
    firstname: {
        type: DataTypes.STRING,
    },
    lastname: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
//    password: {
//        type: DataTypes.STRING,
//    },
    gender: {
        type: DataTypes.STRING,
    },
    phone_number: {
        type: DataTypes.NUMBER
    },
  }); 
    
    clients.associate = (models) => {
        clients.hasMany(models.recipe, {
           foreignKey: 'clientID',
        });
        
    };

  return clients;
};