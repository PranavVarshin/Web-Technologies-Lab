const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const todoRoutes = require("./routes/todoRoutes");

const app = express();

const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());


// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully!");
    })
    .catch((error) => {
        console.error(
            "MongoDB connection failed:",
            error.message
        );
    });


// Routes
app.use("/api/todos", todoRoutes);


// Home route
app.get("/", (req, res) => {

    res.send("MERN Todo Server is running!");

});


// Start server
app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});