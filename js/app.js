const URL = "https://api.waifu.pics/sfw/smile";

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const img = document.querySelector('img');
    img.src = data.url;
    // img.src = data[0].url;
  });