document.addEventListener('DOMContentLoaded', () => {

    // --- BASE DE DATOS DE PROYECTOS ---
    // Aquí puedes añadir o modificar la información de tus proyectos.
    const projectsData = {
        'api-notas': {
            title: 'API Notas',
            description: 'Desarrollé una API de gestión de notas con Spring Boot (Java) y Maven, utilizando PostgreSQL como base de datos para un almacenamiento seguro y escalable. El backend está desplegado en Render, mientras que el frontend en Vercel ofrece una interfaz dinámica construida con React, Typescript y Tailwind CSS. Este proyecto demuestra mi capacidad para diseñar, implementar y desplegar aplicaciones completas, integrando un backend robusto con una experiencia de usuario ágil y moderna. La primera request puede tardar aproximadamente 2 minutos debido a utilizar un servidor en la nube gratuito como Render.',
            link: 'https://notas-livid.vercel.app/'
        },
        'demo-merlin': {
            title: 'Web DEMO Merlin',
            description: 'Desarrollé una página web moderna con React y TypeScript, utilizando HTML semántico y Tailwind CSS para un diseño limpio y adaptable. Con la colaboración de la IA Boltz, construí una experiencia fluida que permite a los visitantes explorar demos en vivo del software de Merlin, mostrando sus principales funcionalidades de forma clara y atractiva. Este proyecto combina interfaz ágil, código escalable y estética profesional, ideal para presentar productos tecnológicos y generar interés en potenciales clientes.',
            link: 'https://project-demos-merlin.vercel.app/' // Cambia '#' por el enlace real
        },
        'e-commerce': {
            title: 'Web tipo e-commerce',
            description: 'Diseñé y desarrollé una pagina tipo tienda online completamente desde cero, utilizando HTML y CSS puro para lograr un sitio ligero y rápido. Cada sección refleja diseño limpio, jerarquía visual clara y una experiencia de usuario intuitiva, sin depender de frameworks. Este proyecto demuestra mi capacidad para construir interfaces profesionales y atractivas solo con código base. No es responsive, abrir en pc con monitor de 1920x1080',
            link: 'https://portafolio-fran-hardwar.vercel.app/' // Cambia '#' por el enlace real
        }
    };

    // --- FUNCIONALIDAD DEL MODAL ---
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');
    const closeModal = document.querySelector('.close-button');

    // Abre el modal al hacer clic en una tarjeta de proyecto
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.project;
            const project = projectsData[projectId];

            if (project) {
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;
                modalLink.href = project.link;
                modalLink.textContent = `Link: ${project.link}`;
                modal.style.display = 'flex';
            }
        });
    });

    // Cierra el modal con el botón 'x'
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cierra el modal al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

});