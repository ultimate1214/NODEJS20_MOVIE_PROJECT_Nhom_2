"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "NguoiDungVMs",
      [
        {
          taiKhoan: "minhtrung_admin",
          hoTen: "string12341324",
          email: "minhtrung_admin@gmail.com",
          soDt: "9999999991",
          maNhom: "GP01",
          matKhau:
            "$2a$10$eELwpm7vW3UsXLD8eYQNgOXQTxHLJ2K0t/C7GWbZ6ZA1QGL.HIeOi",
          maLoaiNguoiDung: "QuanTri",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taiKhoan: "minhtrung_user",
          hoTen: "string12341324",
          email: "minhtrung_user@gmail.com",
          soDt: "9999999991",
          maNhom: "GP01",
          matKhau:
            "$2a$10$7mPLC4pSehlCqpIp05vEr.7QrFfc1GxdFU92tOdtLvzUBBpTFRuka",
          maLoaiNguoiDung: "KhachHang",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taiKhoan: "0941234234",
          hoTen: "string12341324",
          email: "lamhoang1@gmail.com",
          soDt: "9999999991",
          maNhom: "GP01",
          matKhau:
            "$2a$10$SJarmtC5hfC1ftFP5H3S2.sCsLuEOSlwKObBDzvQIznMcGZ2euYMy",
          maLoaiNguoiDung: "QuanTri",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taiKhoan: "11111111a",
          hoTen: "trter123123123",
          email: "3232@hr.vn",
          soDt: "905222333",
          maNhom: "GP01",
          matKhau:
            "$2a$10$SJarmtC5hfC1ftFP5H3S2.sCsLuEOSlwKObBDzvQIznMcGZ2euYMy",
          maLoaiNguoiDung: "KhachHang",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taiKhoan: "123456",
          hoTen: "123sdfdgfd",
          email: "2333232@hr.vn",
          soDt: "905222333",
          maNhom: "GP01",
          matKhau:
            "$2a$10$SJarmtC5hfC1ftFP5H3S2.sCsLuEOSlwKObBDzvQIznMcGZ2euYMy",
          maLoaiNguoiDung: "QuanTri",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     *
     */
    await queryInterface.bulkDelete("NguoiDungVMs", null, {});
  },
};
