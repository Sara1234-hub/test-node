const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8080;
const cors = require('cors');

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/offers", require("./routes/offerRoutes"));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});