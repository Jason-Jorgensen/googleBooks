const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    "title":String,
    "authors":[String],
    "description":String,
    "image":String,
    "link":String,
});

const Books = mongoose.model("Books",BookSchema);

module.exports = Books;
