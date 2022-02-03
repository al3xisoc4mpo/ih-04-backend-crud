// ./index.js

// 1. IMPORTACIONES
const express			= require("express")
const app				= express()

// 2. MIDDLEWARES
require("dotenv").config()


// 3. RUTEO



// 4. SERVIDOR
app.listen(process.env.PORT, () => console.log(`Servidor activo en puerto ${process.env.PORT}`))