// ./routes/books.js

const express			= require("express")
const router			= express.Router()

const bookController	= require("./../controllers/bookController")

// OBTENER LIBROS
router.get("/", bookController.getBooks)

// CREAR PAGINA PARA CREAR UN LIBRO
router.get("/create", bookController.createBooks)

// ENVIAR DATOS DE FORMULARIO PARA CREAR LIBRO EN BD
router.post("/create", bookController.createBooksForm)

// CREAR UNA PAGUNA INDIVIUAL PARA CADA LIBRO CON LOS DATOS RESPECTIVOS
// http://localhost:3005/books/dvyq7t2742vdf
router.get("/:bookID", bookController.getSingleBook)

module.exports = router