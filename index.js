"use strict";
const express = require("express");
const { sequelize } = require("./models");
const { SYSTEM } = require("./src/config/index.js");
const rootRouter = require("./src/routers");
const app = express();

app.use(express.json());

app.use("/api", rootRouter);

app.listen(SYSTEM.PORT, () => {
  console.log(`listening on port ${SYSTEM.PORT}`);
});

//test connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
