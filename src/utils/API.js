import axios from "axios";

export default {
    // Search books from google books api;
    getNewBooks: function(title) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
    },
    // Get all saved books from the database;
    getSavedBooks: function() {
        return axios.get("/api/books/");
    },
    // Delete certain book from the database;
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    // Save a new book to the database;
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }
};