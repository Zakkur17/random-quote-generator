// Select DOM elements
const quoteTextElement = document.getElementById("quote-text");
const quoteAuthorElement = document.getElementById("quote-author");
const newQuoteButton = document.getElementById("new-quote-button");

// API URL
const QUOTE_API_URL = "https://api.quotable.io/random";

// Initial check (optional, can be removed later)
console.log(quoteTextElement, quoteAuthorElement, newQuoteButton);