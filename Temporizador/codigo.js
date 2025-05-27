    
let input = document.getElementById("tempo");
let valorInicial = Number(input.value);
let valorMod = valorInicial;
let intervalo = null;

input.addEventListener("input", () => {
    valorInicial = Number(input.value);
    valorMod = valorInicial;
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
