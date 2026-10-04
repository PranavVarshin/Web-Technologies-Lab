import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import { connectToDatabase } from "./db/conn.mjs";
import postsRouter from "./routes/posts.mjs";


const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.json());
app.use("/api/posts", postsRouter);

app.get("/", (req, res) => {
    res.send("Blog REST API is running!");
});

connectToDatabase()
    .then(() => {
        app.listen(PORT, () => {
            console.log(
                `Server running at http://localhost:${PORT}`
            );
        });
    })
    .catch((error) => {
        console.error(error);
    });