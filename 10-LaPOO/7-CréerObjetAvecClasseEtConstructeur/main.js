class Utilisateur {
  constructor(prenom, nom, email) {
    this.prenom = prenom;
    this.nom    = nom;
    this.email  = email;
  }

  sePresenter() {
    console.log("Je m'appelle " + this.prenom + ' ' + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email + ".");
  }
}
// On crée un objet
var mark = new Utilisateur('Mark', 'Zuckerberg', 'mark@facebook.com');
mark.sePresenter();
// mark.age = "40";
console.log(mark);
class Animal {
    constructor(nombreDePattes, poids) {
      this.nombreDePattes = nombreDePattes;
      this.poids          = poids;
    }

    presentation() {
      console.log("Cet animal possède " + this.nombreDePattes + " pattes et fait " + this.poids + ".");
    }
  }

  class Oiseau extends Animal {
    constructor(nombreDePattes, poids, longueurDesAiles) {
      super(nombreDePattes, poids);
      this.longueurDesAiles = longueurDesAiles;
    }

    voler() {
      console.log("L'oiseau vole !");
    }
  }

  var perroquet = new Oiseau(2, "1kg", "grandes");
perroquet.presentation();
perroquet.voler();
  console.log(perroquet);

// class animal

// class Animal {
//   constructor(nombresDePattes, poids, ailes) {
//     this.nombresDePattes = nombresDePattes;
//     this.poids = poids;
//     this.ailes = ailes;
//   }
//   sePresenter() {
//     console.log(
//       "j'ai " +
//         this.nombresDePattes +
//         " pattes et je fais " +
//         this.poids +
//         "kg avec des ailes " +
//         this.ailes
//     );
//   }
// }
// var oiseau = new Animal(4, 1.5, "grandes");
// oiseau.sePresenter();