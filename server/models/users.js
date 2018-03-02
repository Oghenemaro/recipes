
'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('users', {
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
    
    user.associate = (models) => {
        user.hasMany(models.recipes, {
           foreignKey: 'id',
        });
        
    };
  
      user.associate = (models) => {
        user.hasMany(models.vote, {
           foreignKey: 'id',
        });
        
    };
  
      user.associate = (models) => {
        user.hasMany(models.favorites, {
           foreignKey: 'id',
        });
        
    };
      user.associate = (models) => {
        user.hasMany(models.reviews, {
           foreignKey: 'id',
        });
        
    };

  return user;
};