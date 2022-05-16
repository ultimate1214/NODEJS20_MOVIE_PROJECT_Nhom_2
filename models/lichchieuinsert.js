"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LichChieuInsert extends Model {
    toJSON() {
      let attributes = Object.assign({}, this.get());
      delete attributes.updatedAt;
      delete attributes.createdAt;
      return attributes;
    }

    static associate({ DanhSachVeDat, DanhSachRap, Phim }) {
      // define association here
      this.hasMany(DanhSachVeDat, {
        foreignKey: "maLichChieu",
      });
      // this.belongsTo(DanhSachRap);
    }
  }
  LichChieuInsert.init(
    {
      maLichChieu: DataTypes.INTEGER,
      maPhim: DataTypes.INTEGER,
      ngayChieuGioChieu: DataTypes.STRING,
      maRap: DataTypes.INTEGER,
      giaVe: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "LichChieuInsert",
    }
  );
  return LichChieuInsert;
};
