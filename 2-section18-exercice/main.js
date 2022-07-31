//-------Ma méthode-----------

// document.querySelector("#a-supprimer").remove();
// let body = document.querySelector('body');
// body.style.margin = "0px";
// body.style.padding = "0px";

// let header = document.createElement("header");
// body.appendChild(header);
// header.style.width = "100%";
// header.style.height = "100px";
// header.style.backgroundColor = "#e3b04b";

// let h1 = document.createElement("h1");
// h1.innerHTML = "Bienvenue";
// header.appendChild(h1);
// h1.style.fontSize = "3rem"
// h1.style.fontFamily = "Sans-open"
// h1.style.color = "white";
// h1.style.textAlign = "center";
// h1.style.paddingTop ="1rem";


// let sousHeader = document.createElement("div");
// body.appendChild(sousHeader)
// let a = document.createElement("a");
// sousHeader.appendChild(a);
// a.innerHTML = "<a href='#'>Acceuil</a> / <a href='#'>Une autre page</a>";
// a.style.display = "block";
// a.style.color = "blue";
// a.style.paddingLeft = "1rem";
// a.style.paddingTop = "0.5rem";
// sousHeader.style.backgroundColor = "#f1d6ab";
// sousHeader.style.width = "100%";
// sousHeader.style.height = "40px";

// let divParagraphe = document.createElement("div");
// body.appendChild(divParagraphe);
// let paragraphe = document.createElement("p");
// divParagraphe.appendChild(paragraphe);
// paragraphe.innerHTML = "Ceci est un paragraphe crée avec JavaScripti";
// paragraphe.style.padding = "1rem";

//--------Méthode formation-------------------

document.querySelector('#a-supprimer').remove();

// Créer les éléments
let header = document.createElement('header');
let menu   = document.createElement('div');
let p      = document.createElement('p');

// Les personnaliser
header.textContent = "Bienvenue";
header.style.backgroundColor = "#e3b04b";
header.style.color = "white";
header.style.padding = "30px";
header.style.fontSize = "3em";
header.style.textAlign = "center";

menu.innerHTML = "<a href='#'>Accueil</a> / <a href='#'>Une autre page</a>";
menu.style.backgroundColor = "#f1d6ab";
menu.style.padding = "15px";

p.textContent = "Ceci est un paragraphe créé avec JavaScript !";
p.style.margin = "15px";

// Les ajouter
document.body.append(header, menu, p);
