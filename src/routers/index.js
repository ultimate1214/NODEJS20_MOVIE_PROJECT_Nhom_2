"use strict";
const express = require("express");
const ticketRouter = require("./tickets");
const userRouter = require("./users");
const rootRouter = express.Router();

rootRouter.use("/QuanLyNguoiDung", userRouter);
rootRouter.use("/QuanLyDatVe", ticketRouter);

module.exports = rootRouter;
