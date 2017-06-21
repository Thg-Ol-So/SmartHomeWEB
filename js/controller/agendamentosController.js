angular.module("sistemaappiot").controller("agendaController", function ($scope, sistemaApi, $location, $interval) {
    $scope.lista = [];
    $scope.novoAg = function () {
        $location.url('/novosAgendamentos');
    };
    /*------------------------------- Deletar ---------------------------------------------- */
    var id_delete = {};

    $scope.modaldelet = function (id) {
        $scope.isTru = true;
        $scope.mensagem = "Deseja Excluir?";
        $("#modalDelet").modal();
        id_delete = id;
    };
    $scope.delet = function () {
        sistemaApi.dell(id_delete).then(function (dados) {
            listaAgenda();
        }, function (err) {
            mostrarModal("Erro ao excluir", false);
        });
    };
    /*------------------------------- Atualizar ---------------------------------------------- */
    $scope.userOptions = [{'id': 'Ligado', 'text': 'Ligado'}, {'id': 'Desligado', 'text': 'Desligado'}];
    $scope.agenda= {};
    $scope.atualizar = function (agenda) {
        $scope.agenda = agenda;
        $scope.agenda.data_hora = moment($scope.agenda.data_hora).format("YYYY-MM-DD HH:mm");
        sistemaApi.editar($scope.agenda).then(function (dados) {
            mostrarModal("Atualizado com Sucesso",false);
            listaAgenda();
        },function (err) {
            mostrarModal("Erro ao atualizar", false);
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
    var mostrarModal = function (mensagem, isBotao) {
        $scope.isTru = isBotao;
        $scope.mensagem = mensagem;
        $("#modalDelet").modal();
        $interval(function () {
            $("#modalDelet").modal('hide');
        }, 2000,1);
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
            mostrarModal("Erro ao listar", false);
        });
    };

    var lista = function () {
        $interval(function () {
            listaAgenda();
        }, 60000, 0);
    };
    lista();
    listaAgenda();
});