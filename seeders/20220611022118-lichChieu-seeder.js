'use strict';

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
        await queryInterface.bulkInsert('LichChieuInserts', [{
                maPhim: 1293,
                maLichChieu: 15829,
                ngayChieuGioChieu: "2019-01-01T10:10:00",
                maRap: 462,
                giaVe: 75000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                maPhim: 1293,
                maLichChieu: 15830,
                ngayChieuGioChieu: "2019-01-01T12:10:00",
                maRap: 462,
                giaVe: 75000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                maPhim: 1293,
                maLichChieu: 15831,
                ngayChieuGioChieu: "2019-01-01T14:10:00",
                maRap: 462,
                giaVe: 75000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                maPhim: 1293,
                maLichChieu: 15832,
                ngayChieuGioChieu: "2019-01-01T16:10:00",
                maRap: 462,
                giaVe: 75000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                maPhim: 1293,
                maLichChieu: 15833,
                ngayChieuGioChieu: "2019-01-01T18:10:00",
                maRap: 462,
                giaVe: 75000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                maPhim: 1293,
                maLichChieu: 15834,
                ngayChieuGioChieu: "2019-01-01T20:10:00",
                maRap: 462,
                giaVe: 75000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                maPhim: 1293,
                maLichChieu: 15835,
                ngayChieuGioChieu: "2019-01-02T10:10:00",
                maRap: 462,
                giaVe: 75000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                maPhim: 1293,
                maLichChieu: 15836,
                ngayChieuGioChieu: "2019-01-02T12:10:00",
                maRap: 462,
                giaVe: 75000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                maPhim: 1293,
                maLichChieu: 15837,
                ngayChieuGioChieu: "2019-01-02T14:10:00",
                maRap: 462,
                giaVe: 75000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                maPhim: 1293,
                maLichChieu: 15838,
                ngayChieuGioChieu: "2019-01-02T16:10:00",
                maRap: 462,
                giaVe: 75000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                maPhim: 1293,
                maLichChieu: 15839,
                ngayChieuGioChieu: "2019-01-02T18:10:00",
                maRap: 462,
                giaVe: 75000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                maPhim: 1293,
                maLichChieu: 15840,
                ngayChieuGioChieu: "2019-01-02T20:10:00",
                maRap: 462,
                giaVe: 75000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                maPhim: 1293,
                maLichChieu: 15841,
                ngayChieuGioChieu: "2019-01-03T10:10:00",
                maRap: 462,
                giaVe: 75000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                maPhim: 1293,
                maLichChieu: 15842,
                ngayChieuGioChieu: "2019-01-03T12:10:00",
                maRap: 462,
                giaVe: 75000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};