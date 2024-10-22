// Array of quotes
const quotes = [
  {
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt"
  },
  {
      quote: "Do not watch the clock. Do what it does. Keep going.",
      author: "Sam Levenson"
  },
  {
      quote: "Keep your eyes on the stars, and your feet on the ground.",
      author: "Theodore Roosevelt"
  },
  {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
  },
  {
      quote: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky"
  }
];

// Get DOM elements
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

// Function to generate a random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.innerHTML = `"${randomQuote.quote}"`;
  authorText.innerHTML = `- ${randomQuote.author}`;
}


// Add event listener to the button
newQuoteButton.addEventListener('click', generateQuote);
