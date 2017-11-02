

'use strict';

module.exports = function (sequelize, DataTypes) {
    var votes = sequelize.define('vote', {
        upvote: {
            type: DataTypes.STRING,
            allowNull: false
        },
        downvote: {
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

    votes.associate = function (models) {
        votes.belongsTo(models.users, {
            foreignKey: 'id',
            onDelete: 'CASCADE'
        });
    };

    votes.associate = function (models) {
        votes.belongsTo(models.recipes, {
            foreignKey: 'id',
            onDelete: 'CASCADE'
        });
    };

    return votes;
};