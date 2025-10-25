"use strict";

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000; 


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

// API endpoint to provide the client-side code with the API key.
app.get("/api/v1/unsplash-key", (request, response) => {
    if (process.env.ACCESS_KEY) {
        response.status(200).json({ accessKey: process.env.ACCESS_KEY });
    } else {
        response.status(500).json({ error: "Server is missing API Key" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});