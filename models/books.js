const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String},
    authors: {type: String},
    descrip: {type: String},
    imgURL: {type: String},
    link: {type: String}
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;