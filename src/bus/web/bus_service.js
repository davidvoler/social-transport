(function () {
    /**
     * Bus service - describe your service here
     * @param $http - using angular $http service
     *
     */
    function BusService($http) {

        var service = {url: '/api/bus'};
        service.get = function () {
            return $http.get(service.url);
        };

        return service;
    }

    angular.module('ar.bus')
        .service('BusService', ['$http', BusService]);
}());

