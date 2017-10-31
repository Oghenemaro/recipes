'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipes = sequelize.define('recipes', {
    recipe_name: {
        type: DataTypes.STRING,
    },
    ingredients: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING
    },
  }),
        
    recipes.associate = (models) => {
        recipes.belongsTo(models.clients, {
            foreignKey: 'clientID',
            onDelete: 'CASCADE',
        });
    };

  return recipes;
};

