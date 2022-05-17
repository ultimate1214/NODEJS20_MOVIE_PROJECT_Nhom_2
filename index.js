"use strict";
const express = require("express");
const { sequelize } = require("./models");
const { SYSTEM } = require("./src/config/index.js");
const rootRouter = require("./src/routers");
const app = express();

app.use(express.json());

app.use("/api", rootRouter);

const port = process.env.PORT || SYSTEM.PORT;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
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
