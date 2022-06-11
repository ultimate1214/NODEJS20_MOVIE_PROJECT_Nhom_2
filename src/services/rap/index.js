"use strict";
const { Op } = require('sequelize');
const { LichChieuInsert, DanhSachRap, MaCumRap, MaHeThongRap } = require('../../../models')


const getThongTinHeThongRap = async(maHeThongRap) => {
    try {
        if (!maHeThongRap) {
            const heThongRap = await MaHeThongRap.findAll()
            return heThongRap
        }
        const heThongRap = await MaHeThongRap.findAll({
            where: {
                maHeThongRap: {
                    [Op.like]: `%${maHeThongRap}%`
                }
            }
        })
        return heThongRap
    } catch (err) {
        console.log(err)
        return null
    }
}

const getThongTinLichChieu = async(maPhim) => {
    try {
        if (!maPhim) {
            return null
        }
        const lichChieu = await LichChieuInsert.findAll({
            where: {
                maPhim: maPhim
            }
        })
        return lichChieu
    } catch (err) {
        console.log(err)
        return null
    }

}

const getThongTinCumRapTheoHeThong = async(maHeThongRap) => {
    try {
        if (!maHeThongRap) {
            return null
        }
        const cumRap = await MaCumRap.findAll({
            where: {
                maHeThongRap
            },
            include: [{
                model: DanhSachRap,
                where: {
                    id: {
                        [Op.col]: 'MaCumRap.maCumRap'
                    }
                }
            }]
        })
        console.log(cumRap)
        return cumRap
    } catch (err) {
        console.log(err)
        return null
    }

}



module.exports = {
    getThongTinHeThongRap,
    getThongTinLichChieu,
    getThongTinCumRapTheoHeThong
}