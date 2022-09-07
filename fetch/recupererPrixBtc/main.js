const url = "https://blockchain.info/ticker";

async function recupererPrix(){
   const requete = await fetch(url, {
        method: 'GET'
    });
    if(!requete.ok) {
        alert('un problème est survenu.')
    } else {
        let donnees = await requete.json();
        // console.log(donnees.EUR);
        document.querySelector("#price_label").textContent = donnees.EUR.last;
    }
}

setInterval(recupererPrix, 1000);

