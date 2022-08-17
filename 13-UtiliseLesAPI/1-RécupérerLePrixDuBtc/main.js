const url = "https://blockchain.info/ticker";

function recupererPrix() {
  // Crée une requête

  let requete = new XMLHttpRequest(); // Créer un objet

  requete.open("GET", url); // Premier paramètre GET/POST, Deuxième paramètre c'est l'URL
  requete.responseType = "json"; // Nous attendons du JSON.
  requete.send(); // Nous envoyons notre requête.


  // Dès qu'on reçoit une réponse, cette fonction est exécuté
  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        // code erreur = 200 c-à-d que la page a bien été affiché.
        let reponse = requete.response; // on stock la réponse.
        let prixEnEuros = reponse.EUR.last;
        document.querySelector("#price_label").textContent = prixEnEuros;
      }
    } else {
      alert("Un problème est intervenu, merci de revenir plus tard.");
    }
  };
}
setInterval(recupererPrix, 1000);