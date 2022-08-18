// Les promesses: permettent de représenter l'etat d'une opération asynchrone
// En cours / Honorée / rompue 

const promesses = new Promise((resolve,reject) => {
    // taches asynchrone
    // promesse honorée : resolve()
    // promesse rompue : reject()
})

function chargerScript(script) {
    return new Promise((resolve, reject)=>{
        // Créer un element
        let element = document.createElement('script');
        element.src = script;
        document.head.append(element);

        // Deux possibilités: resolve()

        element.onload = () => resolve('Fichier ' + script + ' a été chargé');

        // reject()
        element.onerror = () => reject(new Error('Operation impossible pour le script '+ script));
    })
}

// const promesse = chargerScript('test.js');
// promesse.then(
//     function(result) {
//         console.log(result);
//     },
//     function(error) {
//         console.log(error);
//     }
// );

// on peut utilisé cette méthode aussi
chargerScript('test.js')
.catch(console.log)