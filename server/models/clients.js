'use strict';
module.exports = (sequelize, DataTypes) => {
  const clients = sequelize.define('Clients', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
          
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  }); 
    
    clients.associate = (models) => {
        clients.hasMany(models.recipes, {
           foreignKey: 'id',
        });
        
    };

  return clients;
};