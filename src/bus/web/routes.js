(function () {

    function routes($routeProvider) {
        $routeProvider
            .when('/bus', {
                templateUrl: '/static/src/bus/web/bus.html',
                controller: 'busController'
            })
    }

    angular.module('ar.bus')
        .config(['$routeProvider', routes])

}());
