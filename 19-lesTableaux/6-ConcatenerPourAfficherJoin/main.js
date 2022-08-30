// la methode join fonctionne avec tableau simple et tableau multidimensionnel :
// le but de la méthode est de transformer un tableau en chaine de caractère.

let monTableau = ['un', 'deux', 'trois'];

console.log(monTableau.join());
console.log(monTableau.join(', '));
console.log(monTableau.join('/ '));

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];

console.log(monTableau2D.join());
console.log(monTableau2D.join(', '));
console.log(monTableau2D[0].join(', '));




