"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DanhSachRap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ MaCumRap, Phim, LichChieuInsert, DanhSachGhe }) {
      // define association here
      this.belongsTo(MaCumRap, {
        foreignKey: "maCumRap",
      });
      this.belongsToMany(Phim, {
        through: LichChieuInsert,
        foreignKey: "maRap",
        otherKey: "maPhim",
      });
      this.hasMany(DanhSachGhe, {
        foreignKey: "maRap",
      });
    }
  }
  DanhSachRap.init(
    {
      maCumRap: DataTypes.STRING,
      maRap: DataTypes.INTEGER,
      tenRap: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "DanhSachRap",
    }
  );
  return DanhSachRap;
};
