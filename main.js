async function getRandomQuote() {
  await fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      document.getElementsByClassName("quote")[0].innerHTML = data.content;
    })
    .catch((err) => console.log(err));
}

getRandomQuote();

async function getRandomImage() {
  await fetch("https://source.unsplash.com/random?wallpapers")
    .then((response) => {
      document.querySelector(
        ".container"
      ).style.backgroundImage = `url(${response.url})`;
      console.log(response.url);
    })

    .catch((err) => console.log(err));
}

getRandomImage();

document.querySelector(".generatequote").addEventListener("click", () => {
  getRandomQuote();
  getRandomImage();
});
