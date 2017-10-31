'use strict';
module.exports = (sequelize, DataTypes) => {
  const clients = sequelize.define('Clients', {
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
        type: DataTypes.INTEGER
    },
  }); 
    
    clients.associate = (models) => {
        clients.hasMany(models.recipes, {
           foreignKey: 'id',
        });
        
    };

  return clients;
};