"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DanhSachGhe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ DanhSachRap, VeVM }) {
      // define association here
      this.belongsTo(DanhSachRap, {
        foreignKey: "maRap",
      });
      this.hasMany(VeVM, {
        foreignKey: "maGhe",
      });
      this.hasMany(VeVM, {
        foreignKey: "giaVe",
      });
    }
  }
  DanhSachGhe.init(
    {
      maGhe: DataTypes.INTEGER,
      tenGhe: DataTypes.STRING,
      maRap: DataTypes.INTEGER,
      loaiGhe: DataTypes.STRING,
      stt: DataTypes.STRING,
      giaVe: DataTypes.INTEGER,
      daDat: DataTypes.BOOLEAN,
      taiKhoanNguoiDat: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "DanhSachGhe",
    }
  );
  return DanhSachGhe;
};
