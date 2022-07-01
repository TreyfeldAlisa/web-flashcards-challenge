'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Decks', [
      { name: 'Беляши', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Культурное', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Черепашки', createdAt: new Date(), updatedAt: new Date() },
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
