"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Phims", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      maPhim: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
      },
      tenPhim: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      biDanh: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      trailer: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      hinhAnh: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      moTa: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      maNhom: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      hot: {
        type: Sequelize.BOOLEAN,
      },
      dangChieu: {
        type: Sequelize.BOOLEAN,
      },
      sapChieu: {
        type: Sequelize.BOOLEAN,
      },
      ngayKhoiChieu: {
        type: Sequelize.DATE,
      },
      danhGia: {
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
    await queryInterface.dropTable("Phims");
  },
};
