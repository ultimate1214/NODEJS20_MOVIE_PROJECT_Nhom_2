"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("VeVMs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      maGhe: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "DanhSachGhes",
          key: "maGhe",
        },
      },
      giaVe: {
        allowNull: false,
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
    await queryInterface.dropTable("VeVMs");
  },
};
