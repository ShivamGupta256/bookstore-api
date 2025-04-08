import Book from "../models/Book.js";

export const createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        const saved = await book.save();
        res.status(201).json(saved);
    }
    catch(err) {
        res.status(400).json({message: err.message});
    }
};

export const getAllBooks = async (req, res) => {
    try {
        const Books = await Book.find();
        res.json(books);
    }
    catch(err) {
        res.status(400).json({message: err.message});
    }
};

export const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if(!book)
            return res.status(404).json({message: "Book not found"});
        res.json(book);
    }
    catch(err) {
        res.status(400).json({message: "Invalid ID"});
    }
};

export const updateBook = async (req, res) => {
    try {
        const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updated)
            return res.status(404).json({message: "Book not found"});
        res.json(updated);
    }
    catch(err) {
        res.status(400).json({message: "Invalid update request"});
    }
};

export const deleteBook = async (req, res) => {
    try {
        const deleted = await Book.findByIdAndDelete(req.params.id);
        if(!deleted)
            return res.status(404).json({message: "Book not found"});
        res.json({message: "Book deleted"});
    }
    catch(err) {
        res.status(400).json({message: "Invalid delete request"});
    }
};

