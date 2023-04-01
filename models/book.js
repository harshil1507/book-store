import mongoose from "mongoose";
const {Schema} = mongoose;

const BookSchema = new Schema({
    title: String,
    author: String,
    isbn: String,
    publishYear: Date,
    }
)