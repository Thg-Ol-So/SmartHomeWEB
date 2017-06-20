angular.module("sistemaappiot").factory("sistemaApi",function($http){
	var _listaAgenda =function (){
		return $http({
			method:"GET",
			url:"http://localhost:8084/SmartHome/produto"
		});
	};
	var _salvarAgenda = function (agenda) {
        return $http({
            method:"POST",
            url:"http://localhost:8084/SmartHome/produto",
            data:agenda
        })
    };
    var _editar = function (agenda) {
        return $http({
            method:"PUT",
            url:"http://localhost:8084/SmartHome/produto",
            data:agenda
        })
    };
    var _dell = function (id) {
        return $http({
            method:"DELETE",
            url:"http://localhost:8084/SmartHome/produto/"+id
        })
    };

	return{
		listAgenda: _listaAgenda,
		salvarAgenda: _salvarAgenda,
		editar: _editar,
		dell: _dell

	}

});