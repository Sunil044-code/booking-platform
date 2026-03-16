const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/reservationDB")
.then(() => console.log("MongoDB connected"));

app.get("/", (req, res) => res.send("Server running"));

app.listen(5000, () => console.log("Server on port 5000"));