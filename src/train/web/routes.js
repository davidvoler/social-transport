(function () {

    function routes($routeProvider) {
        $routeProvider
            .when('/train', {
                templateUrl: '/static/src/train/web/train.html',
                controller: 'trainController'
            })
    }

    angular.module('ar.train')
        .config(['$routeProvider', routes])

}());
