'use strict';

let visits = [
  {
    idCard: '111111111111111',
    checkIn: new Date('2020-12-17T03:23:00'),
    checkOut: new Date('2020-12-17T03:24:00'),
    purpose: 'aaa',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    idCard: '111111111111111',
    checkIn: new Date('2020-12-18T03:23:00'),
    checkOut: new Date('2020-12-18T03:24:00'),
    purpose: 'aaa',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    idCard: '211111111111111',
    checkIn: new Date('2020-12-17T03:23:00'),
    checkOut: new Date('2020-12-17T03:24:00'),
    purpose: 'aaa',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    idCard: '211111111111111',
    checkIn: new Date('2020-12-18T03:23:00'),
    checkOut: new Date('2020-12-18T03:24:00'),
    purpose: 'aaa',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    idCard: '311111111111111',
    checkIn: new Date('2020-12-17T03:23:00'),
    checkOut: new Date('2020-12-17T03:24:00'),
    purpose: 'aaa',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    idCard: '311111111111111',
    checkIn: new Date('2020-12-18T03:23:00'),
    checkOut: new Date('2020-12-18T03:24:00'),
    purpose: 'aaa',
    createdAt: new Date(),
    updatedAt: new Date()
  }
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
    await queryInterface.bulkInsert('Visits', visits)
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
