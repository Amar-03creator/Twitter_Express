import mongoose from "mongoose";
import { MONGODB_URL } from "./serverconfig.js";

export default async function connectDB(){
    try{
        await mongoose.connect(MONGODB_URL);
        console.log('Connected to MongoDB URL');
    } catch{
        console.log('Failed to connect to mongoDB');
        console.log(error);
    }
}