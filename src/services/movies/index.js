"use strict";
const { Op } = require('sequelize');
const { Phim, Banner } = require('../../../models')

const getMovieList = async(maNhom, tenPhim) => {
    try {
        if (!tenPhim) {
            const movie = await Phim.findAll()
            return movie
        }
        const movie = await Phim.findAll({
            where: {
                tenPhim: {
                    [Op.like]: `%${tenPhim}%`
                }
            }
        })
        return movie
    } catch (err) {
        console.log(err)
        return null
    }
}

const getMovieListByPagination = async(page, limit) => {
    try {
        const movie = await Phim.findAll({
            offset: (page - 1) * limit,
            limit: Number(limit)
        })
        return movie;
    } catch (err) {
        console.log(err)
        return null
    }
}

const getMovieListByDate = async(page, limit, tuNgay, denNgay) => {
    try {
        const movie = await Phim.findAll({
            where: {
                "ngayKhoiChieu": {
                    [Op.and]: {
                        [Op.gte]: tuNgay,
                        [Op.lte]: denNgay
                    }
                }
            },
            offset: (page - 1) * limit,
            limit: Number(limit)
        })
        return movie
    } catch (err) {
        console.log(err)
        return null
    }
}

const getBannerList = async() => {
    try {
        const banner = await Banner.findAll()
        return banner
    } catch (err) {
        console.log(err)
        return null
    }
}

const getMovieById = async(maPhim) => {
    try {
        const movie = await Phim.findOne({
            where: {
                maPhim
            }
        })
        return movie;
    } catch (err) {
        console.log(err)
        return null;
    }
}

const deleteMovieById = async(maPhim) => {
    try {
        const movie = await Phim.destroy({
            where: {
                maPhim
            }
        })
        return movie;
    } catch (err) {
        console.log(err)
        return null;
    }
}


module.exports = {
    getMovieList,
    deleteMovieById,
    getBannerList,
    getMovieListByPagination,
    getMovieListByDate,
    getMovieById
}