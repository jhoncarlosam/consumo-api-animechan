const URL = "https://animechan.vercel.app/api/random";

fetch(URL)
  .then((response) => response.json())
  // .then((quote) => console.log(quote))
  .then(data => {
  document.getElementById("txt").innerHTML = data.anime;
  document.getElementById("txt2").innerHTML = data.character;
  document.getElementById("txt3").innerHTML = data.quote;
  })