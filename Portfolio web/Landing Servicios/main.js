const testimonios = [
    {
        nombre: "Martín R., emprendedor y alumno de Click&Learn",
        texto: "Antes de conocer Click&Learn me sentía perdido entre tanta información sobre marketing digital. Gracias a sus cursos pude ordenar mis ideas y aplicar estrategias reales para mi emprendimiento. ¡Hoy mis redes y mis ventas crecieron muchísimo!"
    },
    {
        nombre: "Lucía G., estudiante de diseño",
        texto: "Los cursos son súper claros y aplicables. Enseguida pude aplicar lo aprendido en mis proyectos freelance. Además, el soporte de la comunidad es genial."
    },
    {
        nombre: "Carlos M., dueño de una pyme",
        texto: "Gracias a Click&Learn pude entender cómo funcionan las campañas en redes y dejar de depender de agencias caras. ¡Ahora manejo todo yo!"
    }
];

let indice = 0;

const nombre = document.querySelector(".testimonios h3");
const texto = document.querySelector(".testimonios .texto-testi");

document.getElementById("flecha-derecha").addEventListener("click", () => {
    indice = (indice + 1) % testimonios.length;
    actualizarTestimonio();
});

document.getElementById("flecha-izquierda").addEventListener("click", () => {
    indice = (indice - 1 + testimonios.length) % testimonios.length;
    actualizarTestimonio();
});

function actualizarTestimonio() {
const contenedor = document.querySelector(".testimonios");
contenedor.classList.add("fade-out");

setTimeout(() => {
    nombre.textContent = testimonios[indice].nombre;
    texto.textContent = testimonios[indice].texto;
    contenedor.classList.remove("fade-out");
}, 300);
}