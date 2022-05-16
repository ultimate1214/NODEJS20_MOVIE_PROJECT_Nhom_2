"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class VeVM extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ DanhSachVeDat, DanhSachGhe }) {
      // define association here
      this.belongsTo(DanhSachVeDat, {
        foreignKey: "danhSachVe",
      });
      this.belongsTo(DanhSachVeDat, {
        foreignKey: "id",
      });
      this.belongsTo(DanhSachGhe, {
        foreignKey: "maGhe",
      });
    }
  }
  VeVM.init(
    {
      maGhe: DataTypes.INTEGER,
      giaVe: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "VeVM",
    }
  );
  return VeVM;
};
