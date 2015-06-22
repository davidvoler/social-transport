(function () {
    /**
     * Carpool service - describe your service here
     * @param $http - using angular $http service
     *
     */
    function CarpoolService($http) {

        var service = {url: '/api/carpool'};
        service.get = function () {
            return $http.get(service.url);
        };

        return service;
    }

    angular.module('ar.carpool')
        .service('CarpoolService', ['$http', CarpoolService]);
}());

