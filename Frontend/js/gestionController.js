var app = angular.module('inventoryApp', []);

app.controller('GestionController', function($scope) {
    // Variables de ejemplo para gestionar la vista
    $scope.pageTitle = "Gestión de Inventario";
    $scope.items = [
        {name: 'Lápiz', quantity: 100},
        {name: 'Cuaderno', quantity: 50},
        {name: 'Tijeras', quantity: 75}
    ];

    // Función para añadir un nuevo ítem
    $scope.addItem = function() {
        $scope.items.push({
            name: $scope.newItemName,
            quantity: $scope.newItemQuantity
        });

        // Limpiar los campos después de añadir
        $scope.newItemName = '';
        $scope.newItemQuantity = '';
    };

    // Función para eliminar un ítem
    $scope.removeItem = function(index) {
        $scope.items.splice(index, 1);
    };

    // Nuevo: Variable para gestionar la columna de ordenamiento
    $scope.sortColumn = 'name'; // Orden inicial por nombre

    // Nuevo: Función para cambiar la columna de ordenamiento
    $scope.sortBy = function(column) {
        $scope.sortColumn = column;
    };
});
