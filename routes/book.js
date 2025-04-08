import express from "express";
import { createBook, getAllBooks, getBookById, updateBook, deleteBook} from "../controllers/bookController.js";
import authenticate from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/",authenticate, createBook);
router.get("/", authenticate, getAllBooks);
router.get("/:id", authenticate, getBookById);
router.put("/:id", authenticate, updateBook);
router.delete("/:id", authenticate, deleteBook);

export default router;