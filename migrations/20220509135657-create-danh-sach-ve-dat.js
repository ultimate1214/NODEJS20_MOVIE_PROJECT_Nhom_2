"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DanhSachVeDats", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      taiKhoan: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "NguoiDungVMs",
          key: "taiKhoan",
        },
      },
      maLichChieu: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "LichChieuInserts",
          key: "maLichChieu",
        },
      },
      danhSachVe: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "VeVMs",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("DanhSachVeDats");
  },
};
