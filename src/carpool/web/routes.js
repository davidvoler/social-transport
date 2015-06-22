(function () {

    function routes($routeProvider) {
        $routeProvider
            .when('/carpool', {
                templateUrl: '/static/src/carpool/web/carpool.html',
                controller: 'carpoolController'
            })
    }

    angular.module('ar.carpool')
        .config(['$routeProvider', routes])

}());
