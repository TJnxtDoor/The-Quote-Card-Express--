"use strict";

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000; 

const corsOptions = {
    origin: `http://localhost:${port}` // allows origin to pass cors middleware 
}
// Acces to call API from index.js
async function getRandomImage() {
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.ACCESS_KEY}`; 
try {
    const response = await fetch(endpoint); 
    const returnedData = await response.json();
    const receivedPhotoUrl = returnedData.urls.regular;
    return receivedPhotoUrl;
} catch (error) {
    console.error("Error fetching random image:", error);
    return null;
}
}



// Middleware
app.use(cors(corsOptions));
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
// Server starts listing on the config port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});