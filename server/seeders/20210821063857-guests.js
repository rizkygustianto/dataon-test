'use strict';

let guests = [
  {
    name: 'Asep',
    idCard: '111111111111111',
    dateOfBirth: new Date(1995, 11, 17),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Bsep',
    idCard: '211111111111111',
    dateOfBirth: new Date(1995, 11, 17),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Csep',
    idCard: '311111111111111',
    dateOfBirth: new Date(1995, 11, 17),
    createdAt: new Date(),
    updatedAt: new Date()
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Guests', guests)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
