let mark = {
    prenom: "Mark",
    nom: "Zuckerberg",
    email: "mark@facebool.com",

    // À l'ancienne
    sePresenter: function(){
        console.log("Bonjour je m'appelle " + mark.prenom);
        console.log("Bonjour je m'appelle " + this.prenom);
    }
}

console.log(mark.prenom);
mark.sePresenter();

function recevoirLesCoordonnees() {
    return { latitude: 35, longitude: 139 }
  }
  
  let coordonnees = recevoirLesCoordonnees();
  console.log(coordonnees.latitude);
  console.log(coordonnees.longitude);