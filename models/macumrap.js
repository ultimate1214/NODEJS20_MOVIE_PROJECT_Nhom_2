"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MaCumRap extends Model {
    toJSON() {
      let attributes = Object.assign({}, this.get());
      delete attributes.id;
      delete attributes.createdAt;
      delete attributes.updatedAt;
      return attributes;
    }
    static associate({ MaHeThongRap, DanhSachRap }) {
      // define association here
      this.belongsTo(MaHeThongRap, {
        foreignKey: "maHeThongRap",
      });
      this.hasMany(DanhSachRap, {
        foreignKey: "maCumRap",
        // as: "danhSachRap",
      });
    }
  }
  MaCumRap.init(
    {
      maHeThongRap: DataTypes.STRING,
      maCumRap: DataTypes.STRING,
      tenCumRap: DataTypes.STRING,
      diaChi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "MaCumRap",
    }
  );
  return MaCumRap;
};
