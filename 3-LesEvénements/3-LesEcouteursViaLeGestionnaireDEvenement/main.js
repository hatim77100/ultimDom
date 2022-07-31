let a = document.querySelector("a");
let button = document.querySelector("button");

a.addEventListener('click', (event) => {
   console.log(event);
  if (confirm("Etes-vous sûr ?")) {
    location.href = "https://www.google.fr/webhp";
  }   
});

button.addEventListener("mouseover", () => {
  document.body.style.backgroundColor = "orange";
});

button.addEventListener("mouseout", () => {
  document.body.style.backgroundColor = "white";
});

button.addEventListener("mouseout", () => {
   document.body.style.fontFamily = "verdana";
 });

 function backgroundgreen() {
   document.body.style.backgroundColor = "green";
 };

button.addEventListener("mouseout", backgroundgreen);


//-----Supprimer un événement-------

button.removeEventListener('mouseout', backgroundgreen);