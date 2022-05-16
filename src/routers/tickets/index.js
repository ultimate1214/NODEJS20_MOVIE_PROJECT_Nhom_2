"use strict";
const express = require("express");
const {
  bookTicket,
  getListTicketRoom,
  createShowTime,
  getMovieByMaPhim,
  getCinemaByMaRap,
} = require("../../services/tickets");
const { getResponseMessage } = require("../../services/utils");
const ticketRouter = express.Router();
const { authenticate, checkRole } = require("./../../middlewares/auth");

ticketRouter.post("/DatVe", [authenticate], async (req, res) => {
  const { maLichChieu, danhSachVe } = req.body;
  const { user } = req;
  danhSachVe.forEach(async (danhSachVe) => {
    const data = {
      maLichChieu,
      danhSachVe,
      user,
    };

    const datVe = await bookTicket(data);
    if (!datVe) {
      return res
        .status(500)
        .send(
          getResponseMessage(
            500,
            "Không tìm thấy maLichChieu hoặc danhSachVe",
            datVe
          )
        );
    }
    res.status(200).send(getResponseMessage(200, "Xử lý thành công!", datVe));
  });
});

ticketRouter.get("/LayDanhSachPhongVe", async (req, res) => {
  const { MaLichChieu: maLichChieu } = req.query;
  const ticketRoom = await getListTicketRoom(maLichChieu);
  if (!ticketRoom) {
    return res
      .status(500)
      .send(getResponseMessage(500, "Mã lịch chiếu không hợp lệ!", ticketRoom));
  }
  res
    .status(200)
    .send(getResponseMessage(200, "Xử lý thành công!", ticketRoom));
});

ticketRouter.post(
  "/TaoLichChieu",
  [authenticate, checkRole("QuanTri")],
  async (req, res) => {
    const { maPhim, maRap } = req.body;
    const movie = await getMovieByMaPhim(maPhim);
    if (movie.length === 0) {
      return res
        .status(500)
        .send(
          getResponseMessage(
            500,
            "Dữ liệu không hợp lệ!",
            "MaPhim không hợp lệ"
          )
        );
    }

    const cinema = await getCinemaByMaRap(maRap);
    if (cinema.length === 0) {
      return res
        .status(500)
        .send(
          getResponseMessage(500, "Dữ liệu không hợp lệ!", "MaRap không hợp lệ")
        );
    }

    const showTime = await createShowTime(req.body);
    if (!showTime) {
      return res
        .status(500)
        .send(
          getResponseMessage(
            500,
            "Dữ liệu không hợp lệ!",
            "Lịch chiếu đã đăng ký rồi!"
          )
        );
    }

    res
      .status(200)
      .send(getResponseMessage(200, "Xử lý thành công!", showTime));
  }
);

module.exports = ticketRouter;
