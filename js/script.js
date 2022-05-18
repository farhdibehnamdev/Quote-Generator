import config from "./config.js";

const btn = document.querySelector(".btnQuote");
const quoteElement = document.querySelector(".quote-text");
const authorEl = document.querySelector(".author-name");
const spinnerEl = document.querySelector(".loader");
const innerContainerEl = document.querySelector(".inner-container");
const twitterBtn = document.querySelector(".twitter");
function init() {
  getQuote();
  displayQuote();
}

/**
 *  Loader
 */
const loader = function (quote) {
  if (quote) {
    spinnerEl.classList.remove("hidden");
    innerContainerEl.classList.add("hidden");
    init();
  } else {
    spinnerEl.classList.add("hidden");
    innerContainerEl.classList.remove("hidden");
  }
};
const getQuote = async function () {
  const data = await config.createRequest(
    "api/1.0/?method=getQuote&lang=en&format=json",
    "GET"
  );
  const quote = await data.json();
  return quote;
};

const displayQuote = async function () {
  try {
    const quote = await getQuote();
    if (quote.quoteText.length > 50) {
      quoteElement.classList.add("long-Quote");
    } else {
      quoteElement.classList.remove("long-Quote");
    }
    innerContainerEl.classList.remove("hidden");
    loader(false);
    quoteElement.textContent = quote.quoteText;
    authorEl.textContent = `"${quote.quoteAuthor}"`;
  } catch (error) {
    innerContainerEl.classList.add("hidden");
    loader(true);
  }
};

const sendTweet = function () {
  const quote = quoteElement.textContent;
  const author = authorEl.textContent;
  let twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, "_blank");
};

init();
btn.addEventListener("click", displayQuote);
twitterBtn.addEventListener("click", sendTweet);
