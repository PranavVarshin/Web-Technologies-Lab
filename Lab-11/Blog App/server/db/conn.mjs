import { MongoClient } from "mongodb";
import "../loadEnvironment.mjs";

const client = new MongoClient(process.env.MONGODB_URI);

let db;

export async function connectToDatabase() {
    try {
        await client.connect();

        db = client.db("blogDB");

        console.log("MongoDB connected successfully!");

        return db;
    } catch (error) {
        console.error(
            "MongoDB connection failed:",
            error.message
        );
        process.exit(1);
    }
}

export function getDatabase() {
    return db;
}