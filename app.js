const express = require("express");
const cors = require("cors");
const middleware =require("./utils/middleware");
const keepalive = require("./controller/keepalive");

const app =express();

app.use(cors());
app.use(express.json());

app.use(middleware.consoleData);

app.use("/keepalive", keepalive);

app.use(middleware.unkownEndpoint);

module.exports = app;
