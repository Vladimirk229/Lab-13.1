require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3001;

const client = new MongoClient(process.env.MONGO_URI);

app.get("/", async (req, res) => {
    try {
        await client.connect();
        res.json({ message: "Successfully connected to the database!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to connect to the database." });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
