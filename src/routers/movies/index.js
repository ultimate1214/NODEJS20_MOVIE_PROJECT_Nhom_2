"use strict";
const express = require("express");
const { authenticate } = require("../../middlewares/auth");
const { getMovieList, deleteMovieById, getBannerList, getMovieListByPagination, getMovieListByDate, getMovieById } = require("../../services/movies");

const movieRouter = express.Router();

movieRouter.get('/LayDanhSachPhim', async(req, res) => {
    const { maNhom, tenPhim } = req.body

    const movie = await getMovieList(maNhom, tenPhim)
    if (!movie) {
        return res.status(400).send({
            message: "Không tìm thấy phim"
        })
    }
    console.log(movie)
    return res.status(200).send({ statusCode: 200, message: "Xử lý thành công!", content: movie })

})

movieRouter.get('/LayDanhSachPhimTheoTrang/:page/:soPhanTuTrenTrang', async(req, res) => {
    const { page, soPhanTuTrenTrang } = req.params
    console.log(page, soPhanTuTrenTrang)
    const movie = await getMovieListByPagination(page, soPhanTuTrenTrang)
    if (!movie) {
        return res.status(400).send({
            message: "Không tìm thấy phim"
        })
    }
    res.status(200).send({ statusCode: 200, message: "Xử lý thành công!", content: movie })
})

movieRouter.get('/LayDanhSachPhimTheoNgay/:page/:soPhanTuTrenTrang', async(req, res) => {
    const { page, soPhanTuTrenTrang } = req.params
    const { tuNgay, denNgay } = req.body
    const movie = await getMovieListByDate(page, soPhanTuTrenTrang, tuNgay, denNgay)
    if (!movie) {
        return res.status(400).send({
            message: "Không tìm thấy phim"
        })
    }
    res.status(200).send({ statusCode: 200, message: "Xử lý thành công!", content: movie })
})

movieRouter.delete('/XoaPhim', [authenticate], async(req, res) => {
    const { maPhim } = req.body
    const movie = await deleteMovieById(maPhim)
    if (!movie) {
        return res.status(400).send({ 'message': 'Không tìm thấy phim' })
    }
    res.status(200).send({ statusCode: 200, message: "Xử lý thành công!", content: movie })
})

movieRouter.get('/LayDanhSachBanner', async(req, res) => {
    const banner = await getBannerList()
    if (!banner) {
        return res.status(400).send({
            message: "Không tìm thấy banner"
        })
    }
    console.log(banner)
    return res.status(200).send({ statusCode: 200, message: "Xử lý thành công!", content: banner })
})

movieRouter.get('/LayThongTinPhim', async(req, res) => {
    const { maPhim } = req.body
    const movie = await getMovieById(maPhim)
    if (!movie) {
        return res.status(400).send({
            message: "Không tìm thấy phim"
        })
    }
    console.log(movie)
    return res.status(200).send({ statusCode: 200, message: "Xử lý thành công!", content: movie })
})

module.exports = movieRouter;