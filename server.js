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
