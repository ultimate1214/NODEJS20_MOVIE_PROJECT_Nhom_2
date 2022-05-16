"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DanhSachRaps", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      maCumRap: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "MaCumRaps",
          key: "maCumRap",
        },
      },
      maRap: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
      },
      tenRap: {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("DanhSachRaps");
  },
};
