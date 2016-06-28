let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url:'/',
      contoller:'HomeCtrl',
      templateUrl: 'templates/home.tpl.html'
    });
    

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;