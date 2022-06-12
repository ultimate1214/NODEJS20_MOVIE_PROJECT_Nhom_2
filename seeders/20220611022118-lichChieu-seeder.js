"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "LichChieuInserts",
      [
        {
          maPhim: 1293,
          maLichChieu: 15829,
          ngayChieuGioChieu: "2019-01-01T10:10:00",
          maRap: 467,
          giaVe: 75000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          maPhim: 1293,
          maLichChieu: 15830,
          ngayChieuGioChieu: "2019-01-01T12:10:00",
          maRap: 467,
          giaVe: 75000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          maPhim: 1293,
          maLichChieu: 15831,
          ngayChieuGioChieu: "2019-01-01T14:10:00",
          maRap: 468,
          giaVe: 75000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          maPhim: 1293,
          maLichChieu: 15832,
          ngayChieuGioChieu: "2019-01-01T16:10:00",
          maRap: 468,
          giaVe: 75000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          maPhim: 1293,
          maLichChieu: 15833,
          ngayChieuGioChieu: "2019-01-01T18:10:00",
          maRap: 469,
          giaVe: 75000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          maPhim: 1293,
          maLichChieu: 15834,
          ngayChieuGioChieu: "2019-01-01T20:10:00",
          maRap: 469,
          giaVe: 75000,
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
  },
};
