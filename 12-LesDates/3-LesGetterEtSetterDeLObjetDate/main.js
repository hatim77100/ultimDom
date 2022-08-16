let dateActuelle = new Date();

console.log(dateActuelle.getDay()); // jour de la semaine (commence à partir de dimanche à l'index 0)
console.log(dateActuelle.getFullYear()); // année
console.log(dateActuelle.getDate()); // jour d'aujourd'hui

console.log(dateActuelle.getUTCDay());
// Renvoi la date pour l'heure UTC (donc de Londres)
// Les fonctions sont identiques, on ajoute simplement UTC

dateActuelle.setFullYear(2750);
console.log(dateActuelle.getFullYear());