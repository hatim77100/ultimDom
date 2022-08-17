let ville = "paris";
recevoirTemperature(ville);

let changerDeVille = document.querySelector("#changer");
changerDeVille.addEventListener("click", () => {
  ville = prompt("Entrez le nom de la ville");
  recevoirTemperature(ville);
});


function recevoirTemperature(ville){
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=b4960acfb562f01c960453e6e1374eb7&units=metric";
      console.log(url);
    let requete = new XMLHttpRequest();
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();
  
  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response; // on stock la réponse
        let tempMeaux = Math.round(reponse.main.temp);
        let ville = reponse.name;
        document.querySelector("#temperature_label").textContent = tempMeaux;
        document.querySelector("#ville").textContent = ville;
    }else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
    }
      }
  };
}
