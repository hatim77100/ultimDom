
let a = document.querySelector("a");
let button = document.querySelector("button");


// a.onclick = function(){
//     if(confirm('Etes-vous sûr ?')){
//         location.href = "https://www.google.fr/webhp"
//     }
// }

 a.onclick = () => {
     if(confirm('Etes-vous sûr ?')){
        location.href = "https://www.google.fr/webhp"
    }
 }

 button.onmouseover = () => {
    document.body.style.backgroundColor = "orange";   
 } 
 button.onmouseout = () => {
    document.body.style.backgroundColor = "white";   
 }
