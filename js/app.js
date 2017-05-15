angular.module('2017', ['ui.router', 'controllers', 'services', 'duScroll'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('web', {
    url: '/web',
    views: {
      'navigation': {
        templateUrl: 'partials/navigation.html',
        controller: 'NavigationCtrl'
      },
      'main': {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      },
      'artists': {
        templateUrl: 'partials/artists.html',
        controller: 'ArtistsCtrl'
      },
      'tickets': {
        templateUrl: 'partials/tickets.html',
        controller: 'TicketsCtrl'
      },
      'info': {
        templateUrl: 'partials/info.html',
        controller: 'InfoCtrl'
      },
      'footer': {
        templateUrl: 'partials/footer.html',
        controller: 'FooterCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/web')

})
