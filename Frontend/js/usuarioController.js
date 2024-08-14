// Frontend/js/usuarioController.js
app.controller('UsuarioController', function($scope, $http) {
    $scope.usuarios = [];

    // Función para obtener usuarios
    $scope.getUsuarios = function() {
        $http.get('/api/usuarios')
            .then(function(response) {
                $scope.usuarios = response.data;
            }, function(error) {
                console.error('Error al obtener los usuarios:', error);
            });
    };

    // Función para añadir un nuevo usuario
    $scope.addUsuario = function() {
        $http.post('/api/usuarios', $scope.usuario)
            .then(function(response) {
                $scope.usuarios.push(response.data);
                $scope.usuario = {}; // Limpiar el formulario
            }, function(error) {
                console.error('Error al añadir el usuario:', error);
            });
    };

    // Función para eliminar un usuario
    $scope.deleteUsuario = function(id) {
        $http.delete('/api/usuarios/' + id)
            .then(function(response) {
                $scope.getUsuarios(); // Refrescar la lista de usuarios
            }, function(error) {
                console.error('Error al eliminar el usuario:', error);
            });
    };

    // Llama a la función para obtener usuarios al cargar la página
    $scope.getUsuarios();
});
