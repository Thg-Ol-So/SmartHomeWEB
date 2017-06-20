
angular.module("sistemaappiot").config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "view/home.html"
    });

    $routeProvider.when("/agendamentos", {
        templateUrl: "view/agendamentos.html",
        controller: "agendaController"
    });

    $routeProvider.when("/novosAgendamentos", {
        templateUrl: "view/novosAgendamentos.html",
        controller: "novosAgendamentosController"
    });


}]);

