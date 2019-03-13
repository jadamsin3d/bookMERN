const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookTable = new Schema({
    title: {type: String},
    authors: {type: String},
    descrip: {type: String},
    imgURL: {type: String},
    link: {type: String}
})

const BookTable = mongoose.model("BookTable", BookTable);

module.exports = BookTable;