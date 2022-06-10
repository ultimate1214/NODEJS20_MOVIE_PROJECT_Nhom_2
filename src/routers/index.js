"use strict";
const express = require("express");
const movieRouter = require("./movies");
const ticketRouter = require("./tickets");
const userRouter = require("./users");
const rootRouter = express.Router();

rootRouter.use("/QuanLyNguoiDung", userRouter);
rootRouter.use("/QuanLyDatVe", ticketRouter);
rootRouter.use("/QuanLyPhim", movieRouter);


module.exports = rootRouter;