let btn = document.getElementById('mode');
let span = document.querySelector('span');

btn.addEventListener('click', ()=>{
    if(document.body.classList.contains("dark") == true) {

        document.body.classList.add("white");
    }else {
        document.body.classList.add("dark");
    }
});