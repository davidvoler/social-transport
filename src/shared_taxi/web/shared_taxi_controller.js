
(function () {

    function SharedTaxiController(SharedTaxiService) {
        //write you controller code here
        var self = this;
        self.items = [];
        self.error = '';
        //getting information from REST
        var req = SharedTaxiService.get();
        //handling results
        req.success(function (data, status) {
            self.items = data;
        });
        req.error(function (data) {
            self.error = data;
        });

    }
    angular.module('ar.shared_taxi')
        .controller('SharedTaxiController', ['SharedTaxiService', SharedTaxiController]);

}());
