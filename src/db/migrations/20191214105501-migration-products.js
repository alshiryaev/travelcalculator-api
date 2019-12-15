'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      proteins: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      calories: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      fats: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      carbohydrates: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  },
};