(function () {
    /**
     * Train service - describe your service here
     * @param $http - using angular $http service
     *
     */
    function TrainService($http) {

        var service = {url: '/api/train'};
        service.get = function () {
            return $http.get(service.url);
        };

        return service;
    }

    angular.module('ar.train')
        .service('TrainService', ['$http', TrainService]);
}());

