'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    queryInterface.addColumn('recipes', 'views', Sequelize.INTEGER);
  },

  down: function down(queryInterface, Sequelize) {
    queryInterface.removeColumn('recipes', 'views');
  }
};