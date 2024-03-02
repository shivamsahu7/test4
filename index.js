const express = require("express");
const app = express();
require("dotenv").config();

const cron = require('./app/cron/assignOrderToDeliveryBoy')

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const registerRoutes = require("./app/modules/routes");
registerRoutes(app)

// server
app.listen(process.env.APP_PORT, () => {
  console.log(`server listening port http://localhost:${process.env.APP_PORT}`);
});