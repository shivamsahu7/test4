'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Orders",
      [
        {
          name: "order 1",
          status: false,
          duration: 30,
        },
        {
          name: "order 2",
          status: false,
          duration: 30,
        },
        {
          name: "order 3",
          status: false,
          duration: 30,
        },
        {
          name: "order 4",
          status: false,
          duration: 30,
        },
      ],
      {}
    );
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
