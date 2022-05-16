"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "NguoiDungVMs",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        taiKhoan: {
          allowNull: false,
          unique: true,
          type: Sequelize.STRING,
        },
        matKhau: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        soDt: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        maNhom: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        maLoaiNguoiDung: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        hoTen: {
          allowNull: false,
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
        deletedAt: {
          type: Sequelize.DATE,
        },
      }
      // { paranoid: true, timestamps: true, deletedAt: "destroyTime" }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("NguoiDungVMs");
  },
};
