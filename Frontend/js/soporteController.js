// js/soporteController.js

document.addEventListener('DOMContentLoaded', function () {
    const ticketForm = document.querySelector('#ticketForm');
    const submitTicketButton = document.querySelector('#submitTicketButton');
    
    // Inicializar Materialize
    M.AutoInit();

    // Validar formulario de soporte
    ticketForm.addEventListener('input', function () {
        if (ticketForm.checkValidity()) {
            submitTicketButton.removeAttribute('disabled');
        } else {
            submitTicketButton.setAttribute('disabled', 'disabled');
        }
    });

    // Acción al enviar un ticket
    submitTicketButton.addEventListener('click', function (event) {
        event.preventDefault();
        
        // Lógica para enviar ticket de soporte
        const ticketData = {
            subject: document.querySelector('#ticketSubject').value,
            description: document.querySelector('#ticketDescription').value,
            priority: document.querySelector('#ticketPriority').value
        };

        // Aquí iría la lógica para enviar los datos al servidor o almacenarlos
        console.log('Ticket enviado:', ticketData);

        // Opcional: limpiar el formulario
        ticketForm.reset();
        submitTicketButton.setAttribute('disabled', 'disabled');
    });
});
