const url = "https://blockchain.info/ticker";

function recupererLeprixBtc() {
  axios.get(url)
    .then(function (donnees) {
      document.querySelector("span").textContent = donnees.data.EUR.last;
    })
    .catch(function (erreur) {
      alert("Un problème est survenu");
    });
}
 setInterval(recupererLeprixBtc, 1000);