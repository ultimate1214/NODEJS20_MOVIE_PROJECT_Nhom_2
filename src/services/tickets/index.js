"use strict";
const { deleteRedundancyAtrributes } = require("../utils");
const {
  LichChieuInsert,
  Phim,
  DanhSachRap,
  DanhSachVeDat,
  VeVM,
  MaCumRap,
  DanhSachGhe,
} = require("./../../../models");

const bookTicket = async (data) => {
  try {
    const ticket = await LichChieuInsert.findAll({
      where: {
        maLichChieu: data.maLichChieu,
        giaVe: data.danhSachVe.giaVe,
      },
    });
    if (!ticket) {
      return null;
    }

    const ve = await VeVM.create({
      maGhe: data.danhSachVe.maGhe,
      giaVe: data.danhSachVe.giaVe,
    });

    return await DanhSachVeDat.create({
      taiKhoan: data.user.taiKhoan,
      maLichChieu: data.maLichChieu,
      danhSachVe: ve.id,
    });
  } catch (error) {
    console.log("bookTicket: error", error);
    return null;
  }
};

const getListTicketRoom = async (maLichChieu) => {
  try {
    const ticket = await LichChieuInsert.findOne({
      where: {
        maLichChieu,
      },
    });
    if (!ticket) {
      return null;
    }
    const cinema = await DanhSachRap.findOne({
      where: {
        maRap: ticket.maRap,
      },
    });
    if (!cinema) {
      return null;
    }
    const cinemas = await MaCumRap.findOne({
      where: {
        maCumRap: cinema.maCumRap,
      },
    });
    if (!cinemas) {
      return null;
    }
    deleteRedundancyAtrributes(cinemas.dataValues);
    const movie = await Phim.findOne({
      where: {
        maPhim: ticket.maPhim,
      },
    });
    deleteRedundancyAtrributes(movie.dataValues);

    let chairList = await DanhSachGhe.findAll();
    //   {
    //   where: {
    //     maRap: cinema.maRap,
    //   },
    // }
    // ();
    console.log({ data: chairList });
    deleteRedundancyAtrributes(chairList.dataValues);
    const ticketRoom = {
      thongTinPhim: {
        maLichChieu,
        ...cinemas.dataValues,
        ...movie.dataValues,
      },
      danhSachGhe: chairList,
    };
    return ticketRoom;
  } catch (error) {
    console.log("getListTicketRoom: error", error);
    return null;
  }
};

const getMovieByMaPhim = async (maPhim) => {
  try {
    const movie = await Phim.findAll({
      where: {
        maPhim,
      },
    });
    return movie;
  } catch (error) {
    console.log("getMovieByMaPhim: error", error);
    return null;
  }
};
const getCinemaByMaRap = async (maRap) => {
  try {
    const cinema = await DanhSachRap.findAll({
      where: {
        maRap,
      },
    });
    return cinema;
  } catch (error) {
    console.log("getCinemaByMaRap: error", error);
    return null;
  }
};
const createShowTime = async (data) => {
  const { maPhim, ngayChieuGioChieu, maRap, giaVe } = data;
  try {
    let showTime = await LichChieuInsert.findAll({
      where: {
        maPhim,
        maRap,
      },
    });

    if (showTime.length === 0) {
      showTime = await LichChieuInsert.create({
        maLichChieu: maPhim & maRap,
        maPhim,
        ngayChieuGioChieu,
        maRap,
        giaVe,
      });
    } else {
      return null;
    }

    return showTime;
  } catch (error) {
    console.log("createShowTime: error", error);
    return null;
  }
};

module.exports = {
  bookTicket,
  getListTicketRoom,
  getMovieByMaPhim,
  getCinemaByMaRap,
  createShowTime,
};
