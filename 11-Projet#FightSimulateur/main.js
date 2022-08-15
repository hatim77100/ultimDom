class Personnage {
  constructor(pseudo, classe, sante, attaque, niveau) {
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = niveau;
  }
  evoluer(){
      console.log(this.pseudo + " passe au  niveau " + (this.niveau+1));
  };

  verifierSante(){
    if(this.sante <= 0) {
        this.sante = 0;
        console.log(this.pseudo + " a perdu !");
    }
  };
  
  informations() {
    console.log(
      this.pseudo +
        " " +
        this.classe +
        " a " +
        this.sante +
        " points de vie et il est au niveau " +
        this.niveau
    );
  }
}

class Magicien extends Personnage {
    constructor(ghandour){
        super(ghandour, magicien, 170, 90);
        this.ghandour = ghandour;
        this.magicien = magicien;
        this.sante= 170;
        this.attaque=  90;
    }
    attaquer(personnage){
        personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque "+ personnage.pseudo + " " + this.attaque + " dégâts");
    }
}

var personnage = new Magicien(ghandour, magicien, 170, 90)
personnage.evoluer();
personnage.verifierSante();