const URL = "https://animechan.vercel.app/api/random";
const URL2 = "https://api.waifu.pics/sfw/smile"; //agregar peticion a character
// https://waifu.pics/docs usar API-REST info en el link

fetch(URL)
  .then((response) => response.json())
  // .then((quote) => console.log(quote))
  .then((data) => {
    document.getElementById("txt").innerHTML = data.anime;
    document.getElementById("txt2").innerHTML = data.character;
    document.getElementById("txt3").innerHTML = data.quote;
  });