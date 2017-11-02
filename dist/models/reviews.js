

'use strict';

module.exports = function (sequelize, DataTypes) {
  var review = sequelize.define('reviews', {
    review: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recipeID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  review.associate = function (models) {
    review.belongsTo(models.users, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    });
  };
  review.associate = function (models) {
    review.belongsTo(models.recipes, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    });
  };

  return review;
};