import config from "./config.js";

const btn = document.getElementById("btnQuote");
const getRandomNumber = function (max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomQuote = async function () {
  const data = await config.createRequest("api/quotes", "GET");
  const quotes = await data.json();
  const randomNumber = getRandomNumber(quotes.length, 0);
  return quotes[randomNumber];
};

const displayQuote = function () {
  const quote = getRandomQuote();
};

btn.addEventListener("click", displayQuote);
