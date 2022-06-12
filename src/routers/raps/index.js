"use strict";
const express = require("express");
const { getThongTinHeThongRap, getThongTinLichChieu, getThongTinCumRapTheoHeThong, getThongTinLichChieuPhim } = require("../../services/rap");
const heThongRapRouter = express.Router();

heThongRapRouter.get('/LayThongTinHeThongRap', async(req, res) => {
    const { maHeThongRap } = req.body;
    const heThongRap = await getThongTinHeThongRap(maHeThongRap);
    if (!heThongRap) {
        return res.status(400).send('Không tìm thấy hệ thống rạp');
    }
    return res.status(200).send({ statusCode: 200, message: "Xử lý thành công!", content: heThongRap })
})



heThongRapRouter.get('/LayThongTinLichChieuPhim/:id', async(req, res) => {
    const { id } = req.params
    console.log(id)
    const lichChieu = await getThongTinLichChieu(id)
    console.log(lichChieu)
    if (!lichChieu) {
        return res.status(400).send('Không tìm thấy hệ thống rạp');
    }
    res.status(200).send({ statusCode: 200, message: "Xử lý thành công!", content: lichChieu })
})

heThongRapRouter.get('/LayThongTinCumRapTheoHeThong', async(req, res) => {
    const { maHeThongRap } = req.query
    const cumRap = await getThongTinCumRapTheoHeThong(maHeThongRap)
    if (!cumRap) {
        return res.status(400).send({
            message: "Không tìm thấy cum rap"
        })
    }
    res.status(200).send({ statusCode: 200, message: "Xử lý thành công!", content: cumRap })
})

heThongRapRouter.get('/LayThongTinLichChieuPhim', async(req, res) => {
    const { maPhim } = req.query
    const lichChieu = await getThongTinLichChieuPhim(maPhim)
    if (!lichChieu) {
        return res.status(400).send({
            message: "Không tìm thấy lich chieu"
        })
    }
    res.status(200).send({ statusCode: 200, message: "Xử lý thành công!", content: lichChieu })
})

module.exports = heThongRapRouter;