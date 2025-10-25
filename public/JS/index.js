"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};
const quotes = [
    {
        quote: "All hands! Abandon ship!",
        author: "Captain Picard",
    },

    {
        quote: "Doh!",
        author: "Homer Simpson",
    },

    {
        quote: "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.",
        author: "Eric Schmidt",
    }
]
async function getApiKey() {
    try {
        const response = await fetch('/api/v1/unsplash-key');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.accessKey;
    } catch (error) {
        console.error("Could not fetch API key:", error);
        return null;
    }
}
async function getRandomImage(apiKey) {
    if (!apiKey) {
        console.error("Cannot fetch image, API key is missing.");
        return;
    }
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${apiKey}`;
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Unsplash API error! status: ${response.status}`);
        }
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url("${receivedPhotoUrl}")`;
    } catch (error) {
        console.error("Error fetching random image:", error);
    }
    const corsOptions = {
    origin: `http://localhost:${port}`
}
}
async function initializeApp() {
    const apiKey = await getApiKey("/api/v1/unsplash-key");
    getRandomImage(apiKey);

    
}
initializeApp();