(function () {

    function HomeController() {
        var self = this;
        self.msg = 'Home controller';
        console.log('HomeController');
    }

    angular.module('social.transport')
        .controller('HomeController', [HomeController]);
}());
