"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DanhSachGhes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      maGhe: {
        type: Sequelize.INTEGER,
        unique: true,
      },
      tenGhe: {
        type: Sequelize.STRING,
      },
      maRap: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "DanhSachRaps",
          key: "maRap",
        },
      },
      loaiGhe: {
        type: Sequelize.STRING,
      },
      stt: {
        type: Sequelize.STRING,
      },
      giaVe: {
        type: Sequelize.INTEGER,
      },
      daDat: {
        type: Sequelize.BOOLEAN,
      },
      taiKhoanNguoiDat: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("DanhSachGhes");
  },
};
