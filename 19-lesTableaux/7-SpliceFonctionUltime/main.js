//  La methode splice est utilisé que pour les tableaux simple et multidimensionnel:

let monTableau = ['un', 'deux', 'trois', 'quatre'];
// monTableau.splice(1, 2);
monTableau.splice(0, 0, 'random', 'pie');
// monTableau.splice(1, 1, 'random', 'pie');
// console.log(monTableau);

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
// monTableau2D[0].splice(0, 1);
// monTableau2D.splice(1, 1);
monTableau2D.splice(2,0, ['25', "5", "85"]);

console.log(monTableau2D);






