let dateActuelle = new Date();

// toLocaleDateString = jour, mois, l'année.
// toLocaleTimeString = uniquement l'heure.
// toLocaleString = jour, mois, l'année, l'heure.

// On choisi les options qu'on veut.
let dateLocale = dateActuelle.toLocaleString(navigator.language, {
    weekday : 'long', // short (3 premières lettres), narrow(première lettre), long(toutes les lettres)
    year  : 'numeric',//  numeric (xxxx), 2-digit (xx) 
    month : 'long',// short, narrow, long, numeric 
    day   : 'numeric', // numeric, 2-digit
    hour: 'numeric', // ...
    minute: 'numeric', // ...
    second: 'numeric',
});
console.log(dateLocale);