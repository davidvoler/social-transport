(function () {
    /**
     * SharedTaxi service - describe your service here
     * @param $http - using angular $http service
     *
     */
    function SharedTaxiService($http) {

        var service = {url: '/api/shared_taxi'};
        service.get = function () {
            return $http.get(service.url);
        };

        return service;
    }

    angular.module('ar.shared_taxi')
        .service('SharedTaxiService', ['$http', SharedTaxiService]);
}());

