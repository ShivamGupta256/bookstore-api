import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import bookRoutes from "./routes/book.js";

dotenv.config();

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Welcome to Bookstore API");
});

app.use("/api/auth", authRoutes);

app.use("/api/books", bookRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
})
.catch(err => console.log(err));