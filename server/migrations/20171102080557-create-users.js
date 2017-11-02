//client migration

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => 
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      gender: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('users'),
};





//
//'use strict';
//module.exports = {
//  up: (queryInterface, Sequelize) => {
//    return queryInterface.createTable('users', {
//      id: {
//        allowNull: false,
//        autoIncrement: true,
//        primaryKey: true,
//        type: Sequelize.INTEGER
//      },
//      firstname: {
//        type: Sequelize.STRING
//      },
//      lastname: {
//        type: Sequelize.STRING
//      },
//      email: {
//        type: Sequelize.STRING
//      },
//      gender: {
//        type: Sequelize.STRING
//      },
//      password: {
//        type: Sequelize.STRING
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
//    return queryInterface.dropTable('users');
//  }
//};