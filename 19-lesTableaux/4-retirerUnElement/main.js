let monTableau = ['un', 'deux', 'trois'];

// monTableau.pop();
monTableau.shift();

console.log(monTableau);

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
monTableau2D[0].pop();
monTableau2D[1].shift();
// console.log(monTableau2D);

let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};
delete(monTableauAssociatif.nom);
console.log(monTableauAssociatif);




