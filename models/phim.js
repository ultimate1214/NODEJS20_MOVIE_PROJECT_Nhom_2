"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Phim extends Model {
        toJSON() {
            let attributes = Object.assign({}, this.get());
            delete attributes.id;
            delete attributes.createdAt;
            delete attributes.updatedAt;
            return attributes;
        }
        static associate({ DanhSachRap, LichChieuInsert, Banner }) {
            // define association here
            this.belongsToMany(DanhSachRap, {
                through: LichChieuInsert,
                foreignKey: "maPhim",
                otherKey: "maRap",
            });
        }
    }
    Phim.init({
        maPhim: DataTypes.INTEGER,
        tenPhim: DataTypes.STRING,
        biDanh: DataTypes.STRING,
        trailer: DataTypes.STRING,
        hinhAnh: DataTypes.STRING,
        moTa: DataTypes.TEXT,
        maNhom: DataTypes.STRING,
        hot: DataTypes.BOOLEAN,
        dangChieu: DataTypes.BOOLEAN,
        sapChieu: DataTypes.BOOLEAN,
        ngayKhoiChieu: DataTypes.DATE,
        danhGia: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "Phim",
    });
    return Phim;
};