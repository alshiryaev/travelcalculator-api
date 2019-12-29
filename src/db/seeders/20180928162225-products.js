const { v4 } = require('uuid');

const products = [
  {
    id: v4(),
    name: 'Молоко',
    proteins: 2.8,
    fats: 3.2,
    carbohydrates: 4.7,
    calories: 58,
  },
  {
    id: v4(),
    name: 'Крупа гречневая',
    proteins: 12.6,
    fats: 2.6,
    carbohydrates: 68.0,
    calories: 345,
  },
  {
    id: v4(),
    name: 'Рис',
    proteins: 8.0,
    fats: 1,
    carbohydrates: 76.0,
    calories: 345,
  },
  {
    id: v4(),
    name: 'Яйцо куриное',
    proteins: 12.7,
    fats: 11.5,
    carbohydrates: 0.7,
    calories: 157,
  },
  {
    id: v4(),
    name: 'Крупа ячневая',
    proteins: 10.4,
    fats: 1.3,
    carbohydrates: 71.7,
    calories: 340,
  },
  {
    id: v4(),
    name: 'Крупа пшеничная',
    proteins: 12.7,
    fats: 1.1,
    carbohydrates: 70.6,
    calories: 343,
  },
  {
    id: v4(),
    name: 'Картофель',
    proteins: 2,
    fats: 0.1,
    carbohydrates: 19.7,
    calories: 87,
  },
];


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', products, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  },
};
