// Select DOM elements
const quoteTextElement = document.getElementById("quote-text");
const quoteAuthorElement = document.getElementById("quote-author");
const newQuoteButton = document.getElementById("new-quote-button");

// API URL
const QUOTE_API_URL = 'http://dummyjson.com/quotes/random';

// Initial check (optional, can be removed)
console.log(quoteTextElement, quoteAuthorElement, newQuoteButton);

// Function to fetch a new quote from the API and display it
async function fetchAndDisplayQuote() {
    newQuoteButton.disabled = true; // Disable button to prevent multiple clicks
    // Show loading message
    quoteTextElement.textContent = "Loading...";
    quoteAuthorElement.textContent = ''; // Clear previous author

    try {
        const response = await fetch(QUOTE_API_URL);
        // fetch() returns a promise, so we need to await it
        // 'response' is the response object

        if (!response.ok) { // Check if the response is OK (status code 200-299)
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

    const data = await response.json(); // Parse the JSON from the response
    // 'data' is the parsed JSON object
    console.log('Quote data received:',data);

    // Update the DOM with the new quote and author
    quoteTextElement.textContent = data.quote;
    quoteAuthorElement.textContent = data.author;
    newQuoteButton.disabled = false; // Re-enable button after fetching

} catch (error) {
        console.error("Error fetching quote:", error);
        // Show error message
        quoteTextElement.textContent = "Oops! Could not fetch a quote. Please try again.";
        quoteAuthorElement.textContent = ''; // Clear previous author
        newQuoteButton.disabled = false; // Re-enable button even on error
    }   
}


// Event listener for the button
newQuoteButton.addEventListener("click", fetchAndDisplayQuote);

// Fetch and display a quote when the page loads
fetchAndDisplayQuote();