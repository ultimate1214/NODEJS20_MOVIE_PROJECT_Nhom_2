"use strict";

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { AUTH } = require("./../../config");

const scriptPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const comparePassword = (password, passwordHashed) => {
  return bcrypt.compareSync(password, passwordHashed);
};

const genToken = (data) => {
  return jwt.sign(data, AUTH.SECRET_KEY, { expiresIn: "7d" });
};

const decodeToken = (token) => {
  return jwt.verify(token, AUTH.SECRET_KEY);
};

module.exports = { scriptPassword, comparePassword, genToken, decodeToken };
