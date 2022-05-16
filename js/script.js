import config from "./config.js";

const getRandomQuote = async function () {
  const data = await config.createRequest("api/quotes", "GET");
  const quotes = await data.json();
};
export default getRandomQuote;
