(function () {

  function HomeController() {
    var self = this;
    self.routes = [
      {from:'Tel Aviv, ', from:'Herzelia',provider:'dan',cost:12.30},
      {from:'Tel Aviv, ', from:'Herzelia',provider:'egged',cost:15.30},
      {from:'Tel Aviv, ', from:'Herzelia',provider:'taxi',cost:160.0},
      {from:'Tel Aviv, ', from:'Herzelia',provider:'shared taxi',cost:35.0},
      {from:'Tel Aviv, ', from:'Herzelia',provider:'train',cost:35.0},
      {from:'Tel Aviv, ', from:'Herzelia',provider:'carpool',cost:0}
    ];
    self.providers =[
      {provider:'carpool',icon:'mdi-car'},
      {provider:'egged',icon:'mdi-bus'},
      {provider:'dan',icon:'mdi-bus'},
      {provider:'taxi',icon:'mdi-taxi'},
      {provider:'train',icon:'mdi-train'}
    ];

    self.getProviderIcon = function(provider){
      for (var i in self.providers){
        if (self.providers[i].provider == provider){
          return self.providers[i].icon;
        }
      }
      return 'mdi-apps';
    }

  }

  angular.module('social.transport')
      .controller('HomeController', [HomeController]);
}());
