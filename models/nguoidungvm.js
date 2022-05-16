"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NguoiDungVM extends Model {
    toJSON() {
      let attributes = Object.assign({}, this.get());
      delete attributes.id;
      delete attributes.createdAt;
      delete attributes.updatedAt;
      return attributes;
    }
    static associate({ DanhSachVeDat }) {
      // define association here
      this.hasMany(DanhSachVeDat, {
        foreignKey: "taiKhoan",
      });
    }
  }
  NguoiDungVM.init(
    {
      taiKhoan: DataTypes.STRING,
      matKhau: DataTypes.STRING,
      email: DataTypes.STRING,
      soDt: DataTypes.STRING,
      maNhom: DataTypes.STRING,
      maLoaiNguoiDung: DataTypes.STRING,
      hoTen: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "NguoiDungVM",
    }
  );
  return NguoiDungVM;
};
