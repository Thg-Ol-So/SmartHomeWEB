angular.module("sistemaappiot").controller("agendaController", function ($scope, sistemaApi, $location, $interval) {
    $scope.lista = [];
    $scope.novoAg = function () {
        $location.url('/novosAgendamentos');
    };
    /*------------------------------- Deletar ---------------------------------------------- */
    var id_delete = {};
    $scope.modaldelet = function (id) {
        $("#modalDelet").modal();
        id_delete = id;
    };
    $scope.delet = function () {
        sistemaApi.dell(id_delete).then(function (dados) {
            listaAgenda();
        }, function (err) {
            alert("Erro ao excluir: " + err);
        });
    };
    /*------------------------------- Atualizar ---------------------------------------------- */
    $scope.userOptions = [{'id': 'Ligado', 'text': 'Ligado'}, {'id': 'Desligado', 'text': 'Desligado'}];
    $scope.agenda= {};
    $scope.atualizar = function (agenda) {
        $scope.agenda = agenda;
        $scope.agenda.data_hora = moment($scope.agenda.data_hora).format("YYYY-MM-DD HH:mm");
        sistemaApi.editar($scope.agenda).then(function (dados) {
            alert("Sucess");
            listaAgenda();
        },function (err) {
            alert("Erro");
        });

    };
    $scope.edit = function (list) {

        $("#myModal").modal();
        var copia = {};
        for(var key in list){
            copia[key] = list[key];
        }
        $scope.agenda = copia;

    };
    /*------------------------------- Listar ---------------------------------------------- */
    $scope.listar = true;
    var listaAgenda = function () {
        sistemaApi.listAgenda().then(function (dados) {
            $scope.lista = dados.data;
            for(var key in $scope.lista){
                $scope.lista[key].data_hora = new Date($scope.lista[key].data_hora);
            }
        }, function (err) {
            alert("Erro")
        });
    };

    var lista = function () {
        $interval(function () {
            //alert('ola')
            listaAgenda();
        }, 60000, 0);
    };
    lista();
    listaAgenda();
});