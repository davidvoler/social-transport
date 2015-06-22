
(function () {

    function BusController(BusService) {
        //write you controller code here
        var self = this;
        self.items = [];
        self.error = '';
        //getting information from REST
        var req = BusService.get();
        //handling results
        req.success(function (data, status) {
            self.items = data;
        });
        req.error(function (data) {
            self.error = data;
        });

    }
    angular.module('ar.bus')
        .controller('BusController', ['BusService', BusController]);

}());
