"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     
    */
    await queryInterface.bulkInsert(
      "DanhSachGhes",
      [
        {
          maGhe: 49961,
          tenGhe: "01",
          maRap: 467,
          loaiGhe: "Thuong",
          stt: "01",
          giaVe: 75000,
          daDat: 1,
          taiKhoanNguoiDat: "Administrator ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          maGhe: 49962,
          tenGhe: "02",
          maRap: 468,
          loaiGhe: "Thuong",
          stt: "02",
          giaVe: 75000,
          daDat: 1,
          taiKhoanNguoiDat: "trung.nx",
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
     *
     */
    await queryInterface.bulkDelete("DanhSachGhes", null, {});
  },
};
