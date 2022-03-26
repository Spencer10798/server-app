import mongoose from 'mongoose';
const {schema} = mongoose;

const userSchema = new Schema ({
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    createdAt: { type: Date, default: Date.now }
},{timestamps: true});