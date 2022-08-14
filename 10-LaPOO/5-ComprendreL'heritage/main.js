// Animal (nombreDePattes, poids)
function Animal(nombreDePattes, poids) {
    this.nombreDePattes = nombreDePattes;
    this.poids          = poids;
}

 Animal.prototype.presentation = function(){
    console.log('Cet animal possède ' + this.nombreDePattes + ' pattes et fait ' + this.poids + ".");
 }

// Oiseau (nombreDePattes, poids / longueurDesAiles)
function Oiseau(nombreDePattes, poids, longueurDesAiles){
    Animal.call(this, nombreDePattes, poids);
    /* La fonction Call() permet d'appeler une fonction constructeur : en premier paramètre (this) on donne 
      l'objet actuel, ensuite, on donne les arguments de son constructeur*/
    this.longueurDesAiles = longueurDesAiles;
}

    Oiseau.prototype = Object.create(Animal.prototype);
    Oiseau.prototype.constructor = Oiseau;


// Mammifre (nombreDepattes, poids / typeDePoils) 
function Mammifere(nombreDePattes, poids,typeDePoils){
    Animal.call(this, nombreDePattes, poids);
    this.typeDePoils = typeDePoils;
} 

var perroquet = new Oiseau(2, "1kg", "grandes");
perroquet.presentation();
console.log(perroquet);

