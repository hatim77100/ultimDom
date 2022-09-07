function Animal (nombreDePattes, poids){
    this.nombreDePattes = nombreDePattes;
    this.poids = poids;
}
Animal.prototype.presentation = function() {
    console.log(`J'ai ${this.nombreDePattes} pattes et je pèse ${this.poids}`);
}
// oiseau
function Oiseau(nombreDePattes, poids, longueurDesAiles) {
    Animal.call(this, nombreDePattes, poids)
    this.longueurDesAiles = longueurDesAiles;
}
Oiseau.prototype = Object.create(Animal.prototype);
Oiseau.prototype.constructor = Oiseau
//Mammofere
function Mammifere(nombreDePattes, poids,typeDePoils) {
    Animal.call(this, nombreDePattes, poids)
    this.typeDePoils = typeDePoils;
}

let peroquet = new Oiseau(2, "1kg", "50cm");
let vache = new Mammifere(2, '80kg', "petit");

peroquet.presentation();
console.log(peroquet);
// console.log(vache);