 emailjs.init("NqyCeAkC-XGnfXwEq");

document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm('service_arrai05', 'template_ewek0sw', this)
        .then(() => alert('Mensaje enviado'))
        .catch(error => alert('Error al enviar: ' + error));
});