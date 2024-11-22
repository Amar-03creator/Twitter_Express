import dotenv from "dotenv"

dotenv.config();   //Load .env files from environment variables

export const PORT = process.env.PORT || 5000;

export const MONGODB_URL = process.env.MONGODB_URL;

