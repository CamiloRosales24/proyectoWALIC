document.addEventListener('DOMContentLoaded', function() {
    // Inicializar componentes de Materialize
    M.AutoInit();

    // Habilitar botón de inicio de sesión solo cuando ambos campos estén llenos
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');

    function validateInputs() {
        if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
            loginButton.disabled = false;
        } else {
            loginButton.disabled = true;
        }
    }

    usernameInput.addEventListener('input', validateInputs);
    passwordInput.addEventListener('input', validateInputs);

    // Manejar el envío del formulario de inicio de sesión
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Aquí puedes agregar la lógica para redirigir a otra pantalla
        window.location.href = 'inventario.html';
    });

    // Manejar la recuperación de contraseña
    document.getElementById('recover-password').addEventListener('click', function(event) {
        event.preventDefault();
        alert('Funcionalidad de recuperación de contraseña no implementada.');
    });
});
