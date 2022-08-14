//  on crée une fonction constructeur pour nos utilisateurs:
// Pour la convention le premier lettre est en majuscule de la fonction constructeur.

function Utilisateur(prenom, nom, email) {
  this.prenom = prenom;
  this.nom = nom;
  this.mail = email;

  this.sePresenter = () => {
    console.log(
      "Bonjour je m'appelle " +
        this.prenom +
        " " +
        this.nom +
        " et voici mon adresse mail : " +
        this.mail
    );
  };
}

// on crée un objet

var mark = new Utilisateur("Mark", "Zuckerberg", "mark@zuckerberg");
var bill = new Utilisateur("bill", "Gates", "bill@gatesnotes.com");

// console.log(mark);
// console.log(bill.prenom);
//  console.log(sePresenter);

// console.log(mark.prenom);

// console.log(mark);

mark.poste = "PDG de Facebook";

// console.log(mark);

function Logement(type, annee, placeDeParking, proprietaire){
    this.type           = type;
    this.annee          = annee;
    this.placeDeParking = placeDeParking;
    this.proprietaire   = proprietaire;
}

var appartementA = new Logement("Appartement", 2014, true, mark) // Mark est un objet

console.log(appartementA);
// console.log(appartementA.proprietaire.prenom);
