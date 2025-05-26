    
let input = document.getElementById("tempo");
var valorInicial;
let valorMod = 0;

function reproducirTrompetas() {
    let trompetas = new Audio('Trompeta Militar Despertador.mp3');
    trompetas.play()
}

function empezarTemporizador() {
    
    if (valorInicial === undefined) {
        valorInicial = Number(input.value);
    }
    
    valorMod = Number(input.value);

    intervalo = setInterval(() => {
      if (valorMod > 0) {
        valorMod--;
        input.value = valorMod;
      } else {
        clearInterval(intervalo);
        alert("¡Tiempo terminado!");
      }
    }, 1000); // 1000 ms = 1 segundo
}

function pararTemporizador() {
    clearInterval(intervalo);
}

function reanudarTemporizador() {
    valorMod = valorInicial;
    input.value = valorMod;
}

function reiniciarTemporizador() {
    valorMod = 0; 
    input.value = valorMod; 
    clearInterval(intervalo);
}

function agregar30() {
    valorMod = valorMod + 30;
    input.value = valorMod;
}

function agregar60() {
    valorMod = valorMod + 60;
    input.value = valorMod;
}
