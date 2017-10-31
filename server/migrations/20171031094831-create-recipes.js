'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      recipe_name: {
        type: Sequelize.STRING
      },
      ingredients: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
//        not sure about this but if error occurs return here
      clientsID: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
            model: 'clients',
            key: 'id',
         },
       },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('recipes'),
};