"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MaHeThongRap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ MaCumRap }) {
      // define association here
      this.hasMany(MaCumRap, {
        foreignKey: "maHeThongRap",
      });
    }
  }
  MaHeThongRap.init(
    {
      maHeThongRap: DataTypes.STRING,
      tenHeThongRap: DataTypes.STRING,
      biDanh: DataTypes.STRING,
      logo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "MaHeThongRap",
    }
  );
  return MaHeThongRap;
};
