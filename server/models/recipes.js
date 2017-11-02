'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipes = sequelize.define('recipes', {
    recipe_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    clientsID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
        
//  i think this should be clientId @ foreignkey
    recipes.associate = (models) => {
        recipes.belongsTo(models.Clients, {
            foreignKey: 'id',
            onDelete: 'CASCADE',
        });
    };

  return recipes;
};

