
(function () {

    function CarpoolController(CarpoolService) {
        //write you controller code here
        var self = this;
        self.items = [];
        self.error = '';
        //getting information from REST
        var req = CarpoolService.get();
        //handling results
        req.success(function (data, status) {
            self.items = data;
        });
        req.error(function (data) {
            self.error = data;
        });

    }
    angular.module('ar.carpool')
        .controller('CarpoolController', ['CarpoolService', CarpoolController]);

}());
