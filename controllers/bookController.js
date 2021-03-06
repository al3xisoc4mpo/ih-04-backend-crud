// ./controllers/bookController.js

const Book = require("./../models/Book")

exports.getBooks = async (req, res) => {

    try {

        const foundBooks = await Book.find({})

        res.render("books/list", {
            data: foundBooks
        })

    } catch (error) {

        console.log(error)

    }




}

exports.createBooks = async (req,res) => {
    res.render("books/create")
}

exports.createBooksForm = async (req,res) => {
    // console.log(req.body)
    console.log("Enviando datos del formulario")
    const {title, description,author,rating} = req.body
    // console.log(title)

    try {
        await Book.create({title, description,author,rating})
        // console.log(newBook)
        return res.redirect("/books")
    } catch (error) {
        console.log(error)
    }
}

exports.getSingleBook = async (req, res) => {

    // 1. SABER CUAL LIBREO QUIERES LEER, OBTENER EL IDENTIFICADOR DEL LIBRO
    const { bookID } = req.params
    // console.log(req.params)

    // 2. REALIZAR BUSQUEDA DEL LIBRO INDIVIDUAL A TRAS DE SU ID
    const getTheBook = await Book.findById(bookID)
    console.log(getTheBook)
    res.render("books/single",{
        book: getTheBook
    })
}

exports.editBook = async (req, res) => {

    const { bookID } = req.params
    const foundBook = await Book.findById(bookID)
    console.log(foundBook)
    res.render("books/edit",{
        book: foundBook
    })
}

exports.editBookForm = async (req,res) => {

    const {bookID} = req.params
    const {title, description,author,rating} = req.body
    const updatedBook = await Book.findByIdAndUpdate(
        bookID,
        {title, description,author,rating},
        {new: true}
    )

    res.redirect(`/books/${updatedBook._id}`)
}

exports.deleteBook = async (req, res) => {

	const { bookID } = req.params

	await Book.findByIdAndDelete(bookID)

	res.redirect("/books")

}