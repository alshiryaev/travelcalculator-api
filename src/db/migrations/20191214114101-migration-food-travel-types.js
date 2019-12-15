module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('foodTravelTypes', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      foodId: {
        type: Sequelize.UUID,
        references: {
          model: 'foods',
          key: 'id',
        },
        allowNull: false,
      },
      travelTypeId: {
        type: Sequelize.UUID,
        references: {
          model: 'travelTypes',
          key: 'id',
        },
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('foodTravelTypes');
  },
};
