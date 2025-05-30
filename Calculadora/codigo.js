let input = document.getElementById("input");
let cero = document.getElementById("cero");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let division = document.getElementById("division");
let multiplicacion = document.getElementById("multiplicacion");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let igual = document.getElementById("igual");
let borrar = document.getElementById("borrar");

function escribirSuma() {
    input.value += "+";
}

function escribirMultiplicacion() {
    input.value += "*";
}

function escribirDivision() {
    input.value += "/";
}

function escribirResta() {
    input.value += "-";
}

function escribirCero() {
    input.value += 0;
}

function escribirUno() {
    input.value += 1;
}

function escribirDos() {
    input.value += 2;
}

function escribirTres() {
    input.value += 3;
}

function escribirCuatro() {
    input.value += 4;
}

function escribirCinco() {
    input.value += 5;
}

function escribirSeis() {
    input.value += 6;
}

function escribirSiete() {
    input.value += 7;
}

function escribirOcho() {
    input.value += 8;
}

function escribirNueve() {
    input.value += 9;
}

borrar.addEventListener("click", () => {
    input.value = "";
})

suma.addEventListener("click", () => {
    escribirSuma();
})

multiplicacion.addEventListener("click", () => {
    escribirMultiplicacion();
})

division.addEventListener("click", () => {
    escribirDivision();
})

resta.addEventListener("click", () => {
    escribirResta();
})

cero.addEventListener("click", () => {
    escribirCero();
});

uno.addEventListener("click", () => {
    escribirUno();
});

dos.addEventListener("click", () => {
    escribirDos();
});

tres.addEventListener("click", () => {
    escribirTres();
});

cuatro.addEventListener("click", () => {
    escribirCuatro();
});

cinco.addEventListener("click", () => {
    escribirCinco();
});

seis.addEventListener("click", () => {
    escribirSeis();
});

siete.addEventListener("click", () => {
    escribirSiete();
});

ocho.addEventListener("click", () => {
    escribirOcho();
});

nueve.addEventListener("click", () => {
    escribirNueve();
});