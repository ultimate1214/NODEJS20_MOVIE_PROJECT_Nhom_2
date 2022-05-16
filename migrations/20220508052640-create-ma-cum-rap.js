"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("MaCumRaps", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      maHeThongRap: {
        type: Sequelize.STRING,
        references: {
          model: "MaHeThongRaps",
          key: "maHeThongRap",
        },
      },
      maCumRap: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      tenCumRap: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      diaChi: {
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
    await queryInterface.dropTable("MaCumRaps");
  },
};
