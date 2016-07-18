angular.module('algot', ['ui.router', 'controllers', 'services', 'duScroll'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('site', {
    url: '/site',
    views: {
      'nav': {
        templateUrl: 'partials/nav.html',
        controller: 'NavCtrl'
      },
      'background': {
        templateUrl: 'partials/background.html',
      },
      'one': {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      },
      'two': {
        templateUrl: 'partials/artists.html',
        controller: 'ArtistsCtrl'
      },
      'three': {
        templateUrl: 'partials/tickets.html',
        controller: 'TicketCtrl'
      },
      'four': {
        templateUrl: 'partials/info.html',
        controller: 'InfoCtrl'
      },
      'five': {
        templateUrl: 'partials/karta.html',
        controller: 'MapCtrl'
      },
      'footer': {
        templateUrl: 'partials/footer.html',
        controller: 'FootCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/site')

});
