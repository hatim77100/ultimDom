const url = "https://lesoublisdelinfo.com/api.php";

async function envoyerPrenom(prenom) {
  let requete = await fetch(url, {
    method: "post",
    headers : {
        'Content-Type' : 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
        prenom
    })
  });
  if (!requete.ok) {
    console.log(" y'a une erreur");
  } else {
    let donnees = await requete.json();
    console.log(donnees);
}
}

envoyerPrenom('hatim');