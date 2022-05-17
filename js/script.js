import config from "./config.js";

const btn = document.querySelector(".btnQuote");
const h1Element = document.querySelector(".quote-text");
const authorEl = document.querySelector(".author-name");
function init() {
  getRandomQuote();
  displayQuote();
}
const getRandomNumber = function (max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomQuote = async function () {
  const data = await config.createRequest("api/quotes", "GET");
  const quotes = await data.json();
  const randomNumber = getRandomNumber(quotes.length, 0);
  return quotes[randomNumber];
};

const displayQuote = async function () {
  const quote = await getRandomQuote();
  h1Element.textContent = quote.text;
  authorEl.textContent = quote.author;
};
init();
btn.addEventListener("click", displayQuote);
