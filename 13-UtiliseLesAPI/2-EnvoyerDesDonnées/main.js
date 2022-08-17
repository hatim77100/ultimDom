const url = "https://lesoublisdelinfo.com/api.php";

let requete = new XMLHttpRequest();

//Get
// requete.open('GET', url);
// requete.responseType = 'json';
// requete.send();

//Post: envoyer les données
requete.open("POST", url);
requete.setRequestHeader(
  "Content-Type",
  "application/x-www-form-urlencoded"
); /*comme on utilise POST il faut
à tout prix se faire passer pour un formulaire*/
requete.responseType = 'json';
requete.send('prenom=John');

requete.onload = function () {
  if (requete.readyState === XMLHttpRequest.DONE) {
    if (requete.status === 200) {
      let reponse = requete.response;
      console.log(reponse);
    }
  } else {
    alert("Un problème est intervenu, merci de revenir plus tard.");
  }
};
