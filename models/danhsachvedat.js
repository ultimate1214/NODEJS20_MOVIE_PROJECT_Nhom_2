"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DanhSachVeDat extends Model {
    static associate({ NguoiDungVM, VeVM, LichChieuInsert }) {
      // define association here
      this.belongsTo(NguoiDungVM, {
        foreignKey: "taiKhoan",
      });
      this.hasMany(VeVM, {
        foreignKey: "id",
      });
      this.belongsTo(LichChieuInsert, {
        foreignKey: "maLichChieu",
      });
    }
  }
  DanhSachVeDat.init(
    {
      taiKhoan: DataTypes.STRING,
      maLichChieu: DataTypes.INTEGER,
      danhSachVe: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DanhSachVeDat",
    }
  );
  return DanhSachVeDat;
};
