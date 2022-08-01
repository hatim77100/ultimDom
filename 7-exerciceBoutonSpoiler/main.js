// Selectionner nos éléments:

let btn = document.querySelector("button");
let txt = document.querySelector("span");
let hidden = true;

// Cacher le message :

txt.style.display = "none";

// Détecter le clic :

btn.addEventListener("click", () => {
  if (hidden) {
    btn.textContent = "Cacher";
    txt.style.display = "block";
    hidden = false;
  } else {
    btn.textContent = "Afficher";
    txt.style.display = "none";
    hidden = true;
  }
});
