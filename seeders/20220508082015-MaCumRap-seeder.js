"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "MaCumRaps",
      [
        {
          maHeThongRap: "BHDStar",
          maCumRap: "bhd-star-cineplex-3-2",
          tenCumRap: "BHD Star Cineplex - 3/2",
          diaChi: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          maHeThongRap: "BHDStar",
          maCumRap: "bhd-star-cineplex-bitexco",
          tenCumRap: "BHD Star Cineplex - Bitexco",
          diaChi: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
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
    await queryInterface.bulkDelete("MaCumRaps", null, {});
  },
};
