"use strict";
const { NguoiDungVM } = require("../../../models/");
const {
  getResponseMessage,
  deleteRedundancyAtrributes,
} = require("./../utils");
const { scriptPassword } = require("./../auth");

const createUser = async (data) => {
  try {
    const user = await NguoiDungVM.create(data);

    return user;
  } catch (error) {
    console.log("createUser: error", error);
    return null;
  }
};

const registerUser = async (req, res) => {
  const {
    taiKhoan,
    matKhau,
    email,
    soDt,
    maNhom = "GP00",
    hoTen,
    maLoaiNguoiDung = "KhachHang",
  } = req.body;

  let user = await getUserByEmail(email);
  if (user) {
    return res
      .status(400)
      .send(
        getResponseMessage(
          400,
          "Không tìm thấy tài nguyên!",
          "Email đã tồn tại!"
        )
      );
  }

  user = await getUserByAccount(taiKhoan);
  if (user) {
    return res
      .status(400)
      .send(
        getResponseMessage(
          400,
          "Không tìm thấy tài nguyên!",
          "Tài khoản đã tồn tại!"
        )
      );
  }

  const data = await createUser({
    taiKhoan,
    matKhau: scriptPassword(matKhau),
    email,
    soDt,
    maNhom,
    hoTen,
    maLoaiNguoiDung,
  });

  if (!data) {
    return res.status(400).send("Error: Bad Request");
  }

  data.matKhau = matKhau;

  res.status(200).send(getResponseMessage(200, "Xử lý thành công!", data));
};

const getAllUsers = async () => {
  try {
    const data = await NguoiDungVM.findAll();

    const user = data.map((element, index) => element.dataValues);
    return user;
  } catch (error) {
    console.log("getAllUsers: error", error);
    return null;
  }
};

const getListTypeUser = async () => {
  try {
    const data = await getAllUsers();
    let users = data.map((element, index) => element.maLoaiNguoiDung);
    users = [...new Set(users)];

    const user = users.map((e, index) => {
      let obj = { maLoaiNguoiDung: e, tenLoai: "" };
      if (obj.maLoaiNguoiDung === "QuanTri") obj.tenLoai = "Quản Trị";
      if (obj.maLoaiNguoiDung === "KhachHang") obj.tenLoai = "Khách Hàng";
      return obj;
    });

    return user;
  } catch (error) {
    console.log("getListTypeUser: error", error);
    return null;
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await NguoiDungVM.findOne({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.log("getUserByEmail: error", error);
    return null;
  }
};

const getUserByAccount = async (taiKhoan) => {
  try {
    const user = await NguoiDungVM.findOne({
      where: {
        taiKhoan,
        deletedAt: null,
      },
    });
    return user;
  } catch (error) {
    console.log("getUserByAccount: error", error);
    return null;
  }
};

const getUserById = async (id) => {
  try {
    const user = await NguoiDungVM.findOne({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    console.log("getUserById: error", error);
    return null;
  }
};

const findUser = async (MaNhom, tuKhoa) => {
  const user = await getAllUsers();

  let filter = user.filter(
    (e, index) =>
      (MaNhom === "" || (e.maNhom !== null && e.maNhom.search(MaNhom) > -1)) &&
      (tuKhoa === "" || (e.hoTen !== null && e.hoTen.search(tuKhoa) > -1))
  );

  filter = filter.map((e, index) => {
    return deleteRedundancyAtrributes(e);
  });
  return filter;
};

const updateUser = async (req, res) => {
  const { taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen } =
    req.body;
  let { user } = req;

  const findUser = await getUserByEmail(taiKhoan);
  if (findUser) {
    return res
      .status(500)
      .send(
        getResponseMessage(500, "Dữ liệu không hợp lệ!", "Email đã tồn tại!")
      );
  }

  let updateUser = await updateUserByAccount(taiKhoan, {
    taiKhoan,
    matKhau: scriptPassword(user.matKhau),
    email,
    soDt,
    maNhom,
    maLoaiNguoiDung,
    hoTen,
  });

  updateUser.dataValues.matKhau = matKhau;
  res
    .status(200)
    .send(getResponseMessage(200, "Xử lý thành công!", updateUser));
};

const updateUserByAccount = async (taiKhoan, data) => {
  try {
    let user = await NguoiDungVM.update(data, {
      where: {
        taiKhoan,
      },
    });

    user = await NguoiDungVM.findOne({
      where: {
        taiKhoan,
      },
      // include: {
      //   thongTinDatVe: null,
      // },
    });
    delete user.dataValues.deletedAt;

    return user;
  } catch (error) {
    console.log("updateUserById: error", error);
    return null;
  }
};

const deleteUser = async (taiKhoan) => {
  try {
    const user = NguoiDungVM.destroy({
      where: {
        taiKhoan,
      },
    });
    return user;
  } catch (error) {
    console.log("deleteUser: error", error);
    return null;
  }
};

module.exports = {
  createUser,
  registerUser,
  getAllUsers,
  getListTypeUser,
  getUserByEmail,
  getUserByAccount,
  getUserById,
  findUser,
  updateUser,
  updateUserByAccount,
  deleteUser,
};
