let monTableau = ['un', 'deux', 'trois'];
monTableau.push('cinq');
//  Ajouter un element au debut du tableau:
monTableau.unshift('zéro');
// console.log(monTableau);

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
monTableau2D[1].push('cinq');
// console.log(monTableau2D);

let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};
monTableauAssociatif['nationalite'] = "américaine";
console.log(monTableauAssociatif);



