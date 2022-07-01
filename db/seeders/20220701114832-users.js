'use strict';

module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      { name: 'Igor', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Miha', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Alisa', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },             

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
