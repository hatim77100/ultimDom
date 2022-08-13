// Etape 1 - Sélectionner nos éléments

let input = document.querySelector("#prix");
let error = document.querySelector("small");
let formulaire = document.querySelector("#formulaire");

// Etape 2 - Cacher l'erreur

error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire

let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier

function verifier(nombre) {
    let instruction = document.createElement("div");

    if (nombre < nombreAleatoire) {
        // c'est plus
        instruction.textContent = "#" + coups + "( " + nombre+") c'est plus";
        instruction.className = "instruction plus";

    } else if (nombre > nombreAleatoire) {
        // c'est moin
        instruction.textContent = "#" + coups + " ( " + nombre +") c'est moins";
        instruction.className = "instruction moins";
    } else {
        // félicitation
        instruction.textContent = "#" + coups + "félicitation vous avez trouvez le juste prix !";
        instruction.className = "instruction fini";
        input.disabled = true;
    }

       // Ajouter l'élément devant les autres 
    document.querySelector("#instructions").prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

input.addEventListener('keyup', () => {
    if(isNaN(input.value)){
        // Afficher le message d'erreur.
        error.style.display = "inline";
    }else {
        // Cacher le message d'erreur.
        error.style.display = "none";
    }
});

// Etape 5 - Agir à l'envoi du formulaire

formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    if(isNaN(input.value) || input.value == ""){
       input.style.borderColor = "red";
    }
    else {
        coups++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = "";
        verifier(nombreChoisi);
    }
})




