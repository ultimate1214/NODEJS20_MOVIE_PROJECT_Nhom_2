"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("LichChieuInserts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      maPhim: {
        type: Sequelize.INTEGER,
        references: {
          model: "Phims",
          key: "maPhim",
        },
      },
      maLichChieu: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
      },
      ngayChieuGioChieu: {
        type: Sequelize.STRING,
      },
      maRap: {
        type: Sequelize.INTEGER,
        references: {
          model: "DanhSachRaps",
          key: "maRap",
        },
      },
      giaVe: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("LichChieuInserts");
  },
};
