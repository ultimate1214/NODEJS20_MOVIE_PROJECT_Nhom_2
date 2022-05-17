"use strict";
const express = require("express");
const {
  scriptPassword,
  comparePassword,
  genToken,
} = require("../../services/auth");
const {
  registerUser,
  getListTypeUser,
  getUserByAccount,
  findUser,
  updateUser,
  deleteUser,
} = require("../../services/users");
const {
  getResponseMessage,
  deleteRedundancyAtrributes,
} = require("./../../services/utils");
const { authenticate, checkRole } = require("./../../middlewares/auth");
const userRouter = express.Router();

userRouter.get("/LayDanhSachLoaiNguoiDung", async (req, res) => {
  const user = await getListTypeUser();
  if (!user) {
    return null;
  }

  return res
    .status(200)
    .send(getResponseMessage(200, "Xử lý thành công!", user));
});

userRouter.post("/DangKy", async (req, res) => {
  await registerUser(req, res);
});

userRouter.post("/DangNhap", async (req, res) => {
  const { taiKhoan, matKhau } = req.body;

  const user = await getUserByAccount(taiKhoan);

  if (!user || !comparePassword(matKhau, user.matKhau)) {
    return res
      .status(404)
      .send(
        getResponseMessage(
          404,
          "Không tìm thấy tài nguyên!",
          "Tài khoản hoặc mật khẩu không đúng!"
        )
      );
  }

  const token = genToken({ id: user.id });
  const data = user.dataValues;
  deleteRedundancyAtrributes(data);
  const content = {
    ...data,
    accessToken: token,
  };
  return res
    .status(200)
    .send(getResponseMessage(200, "Xử lý thành công!", content));
});

userRouter.get("/LayDanhSachNguoiDung", async (req, res) => {
  const { MaNhom = "GP01", tuKhoa = "" } = req.query;
  const filter = await findUser(MaNhom, tuKhoa);

  if (!filter.length) {
    return res
      .status(400)
      .send(
        getResponseMessage(
          400,
          "Không tìm thấy tài nguyên!",
          "Mã nhóm không hợp lệ!"
        )
      );
  }

  res.status(200).send(getResponseMessage(200, "Xử lý thành công!", filter));
});

userRouter.get("/LayDanhSachNguoiDungPhanTrang", async (req, res) => {
  const {
    MaNhom = "GP01",
    tuKhoa = "",
    soTrang = 1,
    soPhanTuTrenTrang = 20,
  } = req.query;

  const filter = await findUser(MaNhom, tuKhoa);
  if (!filter.length) {
    return res
      .status(400)
      .send(
        getResponseMessage(
          400,
          "Không tìm thấy tài nguyên!",
          "Mã nhóm không hợp lệ!"
        )
      );
  }
  const content = {
    currentPage: soTrang,
    count: soPhanTuTrenTrang,
    totalPages: Math.ceil(filter.length / soPhanTuTrenTrang),
    totalCount: filter.length,
    items: filter.slice(
      (soTrang - 1) * soPhanTuTrenTrang,
      soTrang * soPhanTuTrenTrang
    ),
  };
  res.status(200).send(getResponseMessage(200, "Xử lý thành công!", content));
});

userRouter.get("/TimKiemNguoiDung", async (req, res) => {
  const { MaNhom = "GP01", tuKhoa = "" } = req.query;
  const filter = await findUser(MaNhom, tuKhoa);

  if (!filter.length) {
    return res
      .status(400)
      .send(
        getResponseMessage(
          400,
          "Không tìm thấy tài nguyên!",
          "Mã nhóm không hợp lệ!"
        )
      );
  }

  res.status(200).send(getResponseMessage(200, "Xử lý thành công!", filter));
});

userRouter.get("/TimKiemNguoiDungPhanTrang", async (req, res) => {
  const {
    MaNhom = "GP01",
    tuKhoa = "",
    soTrang = 1,
    soPhanTuTrenTrang = 1,
  } = req.query;

  const filter = await findUser(MaNhom, tuKhoa);
  if (!filter.length) {
    return res
      .status(400)
      .send(
        getResponseMessage(
          400,
          "Không tìm thấy tài nguyên!",
          "Mã nhóm không hợp lệ!"
        )
      );
  }
  const content = {
    currentPage: soTrang,
    count: soPhanTuTrenTrang,
    totalPages: Math.ceil(filter.length / soPhanTuTrenTrang),
    totalCount: filter.length,
    items: filter.slice(
      (soTrang - 1) * soPhanTuTrenTrang,
      soTrang * soPhanTuTrenTrang
    ),
  };
  res.status(200).send(getResponseMessage(200, "Xử lý thành công!", content));
});

userRouter.post("/ThongTinTaiKhoan", [authenticate], async (req, res) => {
  const { user } = req;
  res.status(200).send(getResponseMessage(200, "Xử lý thành công!", user));
});

userRouter.post(
  "/ThemNguoiDung",
  [authenticate, checkRole("QuanTri")],
  async (req, res) => {
    await registerUser(req, res);
  }
);

userRouter.put("/CapNhatThongTinNguoiDung", authenticate, async (req, res) => {
  const { user } = req;
  const { taiKhoan } = req.body;
  if (user.taiKhoan !== taiKhoan) {
    return res
      .status(500)
      .send(
        getResponseMessage(
          500,
          "Dữ liệu không hợp lệ!",
          "Bạn không có quyền thay đổi tài khoản người khác !"
        )
      );
  }
  await updateUser(req, res);
});

userRouter.post(
  "/CapNhatThongTinNguoiDung",
  [authenticate, checkRole("QuanTri")],
  async (req, res) => {
    await updateUser(req, res);
  }
);

userRouter.delete(
  "/XoaNguoiDung",
  [authenticate, checkRole("QuanTri")],
  async (req, res) => {
    const { taiKhoan } = req.body;
    const user = await getUserByAccount(taiKhoan);
    if (!user) {
      return res
        .status(500)
        .send(
          getResponseMessage(
            500,
            "Dữ liệu không hợp lệ!",
            "Dữ liệu không hợp lệ!"
          )
        );
    }
    const item = deleteUser(taiKhoan);
    if (!item) {
      return res
        .status(500)
        .send(
          getResponseMessage(
            500,
            "Dữ liệu không hợp lệ!",
            "Dữ liệu không hợp lệ!"
          )
        );
    }
    return res
      .status(200)
      .send(getResponseMessage(200, "Xử lý thành công!", "Xử lý thành công!"));
  }
);

module.exports = userRouter;
