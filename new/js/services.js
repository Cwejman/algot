angular.module('services', [])

.service('scroll', function ($window) {

  var functions = []

  return {
    add: function (func) {
      functions.push(func)
      $window.onscroll = function() {
        functions.forEach(function (run) {
          run()
        })
      }
    }
  }

})

.service('resize', function ($window) {

  return {
    add: function (func) {
      angular.element($window).bind('resize', func)
    }
  }
})
