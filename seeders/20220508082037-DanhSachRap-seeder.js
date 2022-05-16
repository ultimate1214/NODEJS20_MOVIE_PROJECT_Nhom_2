"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "DanhSachRaps",
      [
        {
          id: 451,
          maRap: 467,
          tenRap: "Rạp 1",
          maCumRap: "bhd-star-cineplex-3-2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 452,
          maRap: 468,
          tenRap: "Rạp 2",
          maCumRap: "bhd-star-cineplex-3-2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 453,
          maRap: 469,
          tenRap: "Rạp 3",
          maCumRap: "bhd-star-cineplex-3-2",
          createdAt: new Date(),
          updatedAt: new Date(),
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
    await queryInterface.bulkDelete("DanhSachRaps", null, {});
  },
};
