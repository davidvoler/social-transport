
(function () {

    function TrainController(TrainService) {
        //write you controller code here
        var self = this;
        self.items = [];
        self.error = '';
        //getting information from REST
        var req = TrainService.get();
        //handling results
        req.success(function (data, status) {
            self.items = data;
        });
        req.error(function (data) {
            self.error = data;
        });

    }
    angular.module('ar.train')
        .controller('TrainController', ['TrainService', TrainController]);

}());
