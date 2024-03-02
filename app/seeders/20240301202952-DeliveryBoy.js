"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "DeliveryBoys",
      [
        {
          name: "Boy A",
          email: "devliveryboya@yopmail.com",
          maxCarryQuantity: 2,
          status: true,
          maxDuration: 30,
        },
        {
          name: "Boy B",
          email: "devliveryboyb@yopmail.com",
          maxCarryQuantity: 4,
          status: true,
          maxDuration: 30,
        },
        {
          name: "Boy c",
          email: "devliveryboyc@yopmail.com",
          maxCarryQuantity: 5,
          status: true,
          maxDuration: 30,
        },
        {
          name: "Boy d",
          email: "devliveryboyd@yopmail.com",
          maxCarryQuantity: 3,
          status: true,
          maxDuration: 30,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
