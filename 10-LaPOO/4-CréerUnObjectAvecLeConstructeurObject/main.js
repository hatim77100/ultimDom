function Utilisateur(prenom, nom, email) {
  this.prenom = prenom;
  this.nom = nom;
  this.mail = email;
}

Utilisateur.prototype.sePresenter = function() {
  console.log(
    "Bonjour je m'appelle " +
      this.prenom +
      " " +
      this.nom +
      " et voici mon adresse mail : " +
      this.mail
  );
};

// on crée un objet

var mark = new Utilisateur("Mark", "Zuckerberg", "mark@zuckerberg");
var bill = new Utilisateur("bill", "Gates", "bill@gatesnotes.com");

console.log(mark);

mark.sePresenter();

// Créer un objet avec Object()

var monObjet = new Object();
monObjet.titre = "le titre de l'objet";
