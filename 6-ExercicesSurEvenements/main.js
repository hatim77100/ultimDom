let btn = document.querySelector("#btn");
let secondes = 0;
let interval;

btn.addEventListener("click", start);

function start() {
  interval = setInterval(decompte, 1000);
}

function stop() {
  clearInterval(interval);
  document.body.innerHTML += "10";
}

function decompte() {

  secondes++;
  if (secondes == 10) {
    stop();
  } else {
    document.body.innerHTML += secondes + "<br>";
  }
}

