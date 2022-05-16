"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "MaHeThongRaps",
      [
        {
          maHeThongRap: "BHDStar",
          tenHeThongRap: "BHD Star Cineplex",
          biDanh: "bhd-star-cineplex",
          logo: "http://movieapi.cyberlearn.vn/hinhanh/bhd-star-cineplex.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          maHeThongRap: "CGV",
          tenHeThongRap: "cgv",
          biDanh: "cgv",
          logo: "http://movieapi.cyberlearn.vn/hinhanh/cgv.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          maHeThongRap: "CineStar",
          tenHeThongRap: "CineStar",
          biDanh: "cinestar",
          logo: "http://movieapi.cyberlearn.vn/hinhanh/cinestar.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          maHeThongRap: "Galaxy",
          tenHeThongRap: "Galaxy Cinema",
          biDanh: "galaxy-cinema",
          logo: "http://movieapi.cyberlearn.vn/hinhanh/galaxy-cinema.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          maHeThongRap: "LotteCinima",
          tenHeThongRap: "Lotte Cinema",
          biDanh: "lotte-cinema",
          logo: "http://movieapi.cyberlearn.vn/hinhanh/lotte-cinema.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          maHeThongRap: "MegaGS",
          tenHeThongRap: "MegaGS",
          biDanh: "megags",
          logo: "http://movieapi.cyberlearn.vn/hinhanh/megags.png",
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
    await queryInterface.bulkDelete("MaHeThongRaps", null, {});
  },
};
