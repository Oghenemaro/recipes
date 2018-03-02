'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('votes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      upvote: {
        type: Sequelize.STRING
      },
      downvote: {
        type: Sequelize.STRING
      },
      recipeID: {
        type: Sequelize.INTEGER
      },      
      userID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
            model: 'users',
            key: 'id',
         },
       },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('votes'),
};
