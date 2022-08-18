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

async function resultat() {
    try {
        const scriptA = await chargerScript('test.js');
        console.log(scriptA);
        const scriptB = await chargerScript('autre.js');
        console.log(scriptB); 
    }
    catch(error) {
        console.log(error);
        document.head.lastChild.remove();
    }
}

resultat();


// Async et Await "sucres syntaxiques"

//  async function direBonjour() {
//     const promesse = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Promesse tenu !'), 3000)
//     });
//     let resultat = await promesse;
//     console.log(resultat);
// }

// direBonjour();