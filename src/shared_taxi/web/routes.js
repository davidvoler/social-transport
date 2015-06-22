(function () {

    function routes($routeProvider) {
        $routeProvider
            .when('/shared_taxi', {
                templateUrl: '/static/src/shared_taxi/web/shared_taxi.html',
                controller: 'shared_taxiController'
            })
    }

    angular.module('ar.shared_taxi')
        .config(['$routeProvider', routes])

}());
