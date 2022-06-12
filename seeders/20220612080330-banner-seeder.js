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
        await queryInterface.bulkInsert('Banners', [{
                maBanner: 1,
                maPhim: 1282,
                hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                maBanner: 2,
                maPhim: 1283,
                hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                maBanner: 3,
                maPhim: 1284,
                hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png",
                createdAt: new Date(),
                updatedAt: new Date(),
            }
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