require('dotenv').config();

const express = require('express');
const connectDB = require("./config/db");

 const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))
