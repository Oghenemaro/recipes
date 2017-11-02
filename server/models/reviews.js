

'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('reviews', {
    review: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    recipeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  
  
    review.associate = (models) => {
      review.belongsTo(models.users, {
        foreignKey: 'id',
        onDelete: 'CASCADE',
      });
    };
    review.associate = (models) => {
      review.belongsTo(models.recipes, {
        foreignKey: 'id',
        onDelete: 'CASCADE',
    });
  };
  
  

  return review;
};


