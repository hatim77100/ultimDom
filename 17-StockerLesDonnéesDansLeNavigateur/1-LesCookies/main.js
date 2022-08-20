// il faut avoir un serveur pour simuler un ordinateur pour voir les cookies

// Creer un cookie
document.cookie = 'prenom = John';
// alert(document.cookie);

// Modifier un cookie

document.cookie = 'prenom = Mark';

// Supprimer un cookie 

document.cookie = 'prenom=';

// Options

document.cookie = 'prenom = John; path=/admin'; // le cookie sera dispo que sur le repertoire admin.
document.cookie = 'prenom = John; path=/admin; domain=believmy.com'; //le cookie sera dispo que sur ce domain là.
let date = new Date(Date.now() + 3153600000);
date = date.toUTCString()
document.cookie = 'prenom = John; path=/admin; domain=believmy.com; expires=' + date;
document.cookie = 'prenom = John; path=/admin; domain=believmy.com; max-age= 3153600000';
document.cookie = 'prenom = John; path=/admin; domain=believmy.com; max-age= 3153600000; secure'; // on utilise notre cookie que sur les sites https.
