input = document.getElementById("tempo");
valorInicial = Number(input.value);
valorMod = valorInicial;

function reproducirTrompetas() {
    let trompetas = new Audio('Trompeta Militar Despertador.mp3');
    trompetas.play()
}

function empezarTemporizador() {
    
    input = document.getElementById("tempo");
    valorInicial = Number(input.value);
    valorMod = valorInicial;

    intervalo = setInterval(() => {
      if (valorMod > 0) {
        valorMod--;
        input.value = valorMod;
      } else {
        clearInterval(intervalo);
        reproducirTrompetas();
        alert("¡Tiempo terminado!");
      }
    }, 1000); // 1000 ms = 1 segundo
}

function pararTemporizador() {
    clearInterval(intervalo);
}

function reiniciarTemporizador() {
    valorMod = valorInicial;
    input.value = valorMod;
}

function agregar30() {
    valorMod = valorMod + 30;
    input.value = valorMod;
}

function agregar60() {
    valorMod = valorMod + 60;
    input.value = valorMod;
}
