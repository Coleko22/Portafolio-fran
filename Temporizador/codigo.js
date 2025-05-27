let button = document.getElementById("play");
let svgPlay = document.getElementById("svg-play");
let svgPause = document.getElementById("svg-pausa");
let input = document.getElementById("tempo");
let valorInicial = Number(input.value);
let valorMod = valorInicial;
let intervalo = null;

input.addEventListener("input", () => {
    valorInicial = Number(input.value);
    valorMod = valorInicial;
});

button.addEventListener("click", () => {
    let isPlayVisible = button.contains(svgPlay);

    if (isPlayVisible) {
        svgPlay.parentNode.replaceChild(svgPause, svgPlay);
        svgPause.style.display = 'inline';
        empezarTemporizador(); 
    } else {
        svgPause.parentNode.replaceChild(svgPlay, svgPause);
        svgPause.style.display = 'none';
        pararTemporizador(); 
    }
});

function empezarTemporizador() {

    if (intervalo !== null) return;
    
    if (valorMod == 0){
        valorMod = Number(input.value);
    }

    intervalo = setInterval(() => {
      if (valorMod > 0) {
        valorMod--;
        input.value = valorMod;
      } else {
        clearInterval(intervalo);
        intervalo = null;
        alert("¡Tiempo terminado!");
      }
    }, 1000); // 1000 ms = 1 segundo
}

function pararTemporizador() {
    clearInterval(intervalo);
    intervalo = null;
}

function reiniciarTemporizador() {
    valorMod = valorInicial;
    input.value = valorMod;
    clearInterval(intervalo);
    intervalo = null;
    svgPause.parentNode.replaceChild(svgPlay, svgPause);
    svgPause.style.display = 'none';
}

function agregar30() {
    valorMod = valorMod + 30;
    input.value = valorMod;
    valorInicial = valorMod;
}

function agregar60() {
    valorMod = valorMod + 60;
    input.value = valorMod;
    valorInicial = valorMod;
}
