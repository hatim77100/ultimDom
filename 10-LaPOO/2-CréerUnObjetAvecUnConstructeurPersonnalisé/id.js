class Users {
    constructor(taille, color){
        this.taille = taille;
        this.color = color;
    }
}

let hatim = new Users(175, "blanc");

hatim.poid = "72kg";
// console.log(hatim);

/*------------------------------------------- */

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

  
const mark = new Utilisateur("Mark", "Zuckerberg", "mark@zuckerberg");
const bill = new Utilisateur("bill", "Gates", "bill@gatesnotes.com");

// console.log(mark);

/*--------------------------- */

