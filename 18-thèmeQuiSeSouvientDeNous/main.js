let btn = document.getElementById('mode');
let span = document.querySelector('span');

if(localStorage.getItem("theme")){
   if(localStorage.getItem("theme") == "sombre") {
       modeSombre();
    } 
}

btn.addEventListener('click', ()=>{ 
   if(document.body.classList.contains("dark")){
    // mode clair
    document.body.className ="";
    span.textContent = "thème sombre";
    localStorage.setItem("thème", "clair");
   }
   else {
    //je peux passer au mode sombre
    modeSombre()
   }
});

function modeSombre(){
    document.body.className = "dark";
    span.textContent = "thème clair";    
    localStorage.setItem("theme", "sombre");
};
