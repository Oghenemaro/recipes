//recipes migration

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      recipe_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ingredients: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
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
      userID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
            model: 'users',
            key: 'id',
         },
       },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('recipes'),
};






//
//
//'use strict';
//module.exports = {
//  up: (queryInterface, Sequelize) => {
//    return queryInterface.createTable('recipes', {
//      id: {
//        allowNull: false,
//        autoIncrement: true,
//        primaryKey: true,
//        type: Sequelize.INTEGER
//      },
//      recipe_name: {
//        type: Sequelize.STRING
//      },
//      ingredients: {
//        type: Sequelize.STRING
//      },
//      description: {
//        type: Sequelize.STRING
//      },
//      clientsID: {
//        type: Sequelize.INTEGER
//      },
//      createdAt: {
//        allowNull: false,
//        type: Sequelize.DATE
//      },
//      updatedAt: {
//        allowNull: false,
//        type: Sequelize.DATE
//      }
//    });
//  },
//  down: (queryInterface, Sequelize) => {
//    return queryInterface.dropTable('recipes');
//  }
//};