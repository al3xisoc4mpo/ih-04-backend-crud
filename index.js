// ./index.js

// 1. IMPORTACIONES
const express = require("express")
const app = express()
const connectDB = require("./config/db")

// 2. MIDDLEWARES
require("dotenv").config()
connectDB()

// 3. RUTEO
app.use("/", require("./routes/index"))

// 4. SERVIDOR
app.listen(process.env.PORT, () => console.log(`Servidor activo en puerto ${process.env.PORT}`))