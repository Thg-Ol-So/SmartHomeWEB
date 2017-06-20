angular.module("sistemaappiot").controller("novosAgendamentosController", function ($scope, sistemaApi, $location) {
    $scope.estado = {};
    $scope.data = {};
    $scope.alertas = [];
    $scope.userOptions = [{'id': 'Ligado', 'text': 'Ligado'}, {'id': 'Desligado', 'text': 'Desligado'}];

    $scope.novoAg = function () {
        $location.url('/agendamentos');
    };
    $scope.data = new Date();
    $scope.salvar = function (estado) {
        $scope.alertas = [];
        $scope.estado.data_hora = moment($scope.data).format("YYYY-MM-DD HH:mm:ss");
        $scope.estado = estado;
        var data_atual = new Date();
        if($scope.data > data_atual){
            if($scope.estado.estadoTelevisor !=null && $scope.estado.estadoVentilador !=null
                    && $scope.estado.estadoLuzQuarto != null && $scope.estado.estadoLuzSala != null){
                    sistemaApi.salvarAgenda($scope.estado).then(function (dados) {
                        $scope.novoAg();
                    }, function (err) {
                        $scope.alertas.push("Erro ao Cadastrar");
                    });
                }else{
                        $scope.alertas.push("Preencha Todos campos");
                }
        }else{
            $scope.alertas.push("Data invalida! data deve ser maior que data ou a hora atual :D");
        }
    };
     $scope.closeAlert = function(index) {
            $scope.alertas.splice(index, 1);
      };
   
});