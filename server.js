"use strict";
app.use(express.static("./public"));
app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const express = require("express");
const app = express();
const port = 8080;
require("dotenv").config();
const cors = require("cors");
app.use("/api/v1/getRandomImage", (request, response) => {
    response.status(200).json({
        status: 200,
        data: process.env.CLIENT_ID
    });
});
app.use(cors());

async function getRandomImage() {
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.CLIENT_ID}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;

        return receivedPhotoUrl;
    } catch (error) {
        console.error(error);
    }
}