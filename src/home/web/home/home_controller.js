(function () {

    function HomeController() {
        var self = this;
        self.msg = 'Home controller';
        console.log('HomeController');
    }

    angular.module('ate.report')
        .controller('HomeController', [HomeController]);
}());
