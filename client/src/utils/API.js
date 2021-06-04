import axios from 'axios';

export default {
    //Get all books
    getBooks:function() {
        return axios.get("/api/books");
    },
    //Deletes the book by the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    //Save book to the DB
    saveBook: function(bookData) {
        return axios.post("/api/books" + bookData)
    }
}