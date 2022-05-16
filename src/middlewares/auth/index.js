"use strict";
const { getUserById } = require("../../services/users");
const { decodeToken } = require("./../../services/auth");
const authenticate = async (req, res, next) => {
  try {
    const Authorization = req.header("Authorization");
    const token = Authorization.replace("Bearer ", "");
    const data = decodeToken(token);
    const user = await getUserById(data.id);

    if (!user) {
      return res.status(401).send("Error: Unauthorized");
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(500).send(`authenticate errors: ${error}`);
  }
};

const checkRole = (role) => (req, res, next) => {
  try {
    const { user } = req;
    if (user.maLoaiNguoiDung != role) {
      return res
        .status(401)
        .send(`Error: Unauthorized, you must login by ${role}`);
    }
    next();
  } catch (error) {
    res.status(500).send(`checkRole errors: ${error}`);
  }
};

module.exports = { authenticate, checkRole };
