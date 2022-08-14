// dans la console y'a le prototype 

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
  
  console.log(mark);
 