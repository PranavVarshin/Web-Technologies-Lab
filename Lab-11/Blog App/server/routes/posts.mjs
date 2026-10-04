import express from "express";
import { ObjectId } from "mongodb";
import { getDatabase } from "../db/conn.mjs";

const router = express.Router();


// GET - View all posts
router.get("/", async (req, res) => {
    try {
        const db = getDatabase();

        const posts = await db
            .collection("posts")
            .find({})
            .toArray();

        res.json(posts);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


// GET - View individual post
router.get("/:id", async (req, res) => {
    try {
        const db = getDatabase();

        const post = await db
            .collection("posts")
            .findOne({
                _id: new ObjectId(req.params.id)
            });

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


// POST - Create new post
router.post("/", async (req, res) => {
    try {
        const db = getDatabase();

        const post = {
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            createdAt: new Date()
        };

        const result = await db
            .collection("posts")
            .insertOne(post);

        res.status(201).json({
            _id: result.insertedId,
            ...post
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


// PUT - Update post
router.put("/:id", async (req, res) => {
    try {
        const db = getDatabase();

        const updatedPost = {
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            updatedAt: new Date()
        };

        const result = await db
            .collection("posts")
            .findOneAndUpdate(
                { _id: new ObjectId(req.params.id) },
                { $set: updatedPost },
                { returnDocument: "after" }
            );

        if (!result) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.json(result);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


// DELETE - Delete post
router.delete("/:id", async (req, res) => {
    try {
        const db = getDatabase();

        const result = await db
            .collection("posts")
            .deleteOne({
                _id: new ObjectId(req.params.id)
            });

        if (result.deletedCount === 0) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.json({
            message: "Post deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


export default router;