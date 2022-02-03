// ./routes/books.js

const express			= require("express")
const router			= express.Router()

const bookController	= require("./../controllers/bookController")

// OBTENER LIBROS
router.get("/", bookController.getBooks)

// CREAR PAGINA PARA CREAR UN LIBRO
router.get("/create", bookController.createBooks)

module.exports = router