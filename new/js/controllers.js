angular.module('controllers', [])

.controller('NavCtrl', function ($scope, $window, scroll, resize) {

  $scope.mobile = false
  $scope.scrollPos = 0
  $scope.switchPos = $window.innerHeight * 0.8

  $scope.goto = function (element) {
    $scope.mobile = false;
    var position = (typeof element == "string") ? $(element).offset().top : element
    $('html, body').animate({
      scrollTop: position
    }, 1000)
  }

  scroll.add(function () {
    $scope.scrollPos = document.body.scrollTop || document.documentElement.scrollTop || 0
    $scope.$apply()
  })

  resize.add(function() {
    $scope.switchPos = $window.innerHeight * 0.8
    return $scope.$apply()
  })

})

.controller('HomeCtrl', function ($scope, $window, scroll, resize) {

  $scope.opacity = 1
  $scope.height = $window.innerHeight

  scroll.add(function() {
    var scrollPos = document.body.scrollTop || document.documentElement.scrollTop || 0
    var minus = scrollPos / $scope.height * 2
    if (minus < 0 && scrollPos < 0) $scope.opacity = 1
    else if (minus < 0) $scope.opacity = 0
    else $scope.opacity = 1 - scrollPos /$scope.height * 2
    $scope.$apply()
  })

  resize.add(function() {
    $scope.height = $window.innerHeight
    return $scope.$apply()
  })

})

.controller('TicketCtrl', function ($scope) {

  $scope.state = 0


  $scope.changeState = function (state) {
    if (this.state == state) this.state = 0
    else {
      this.state = state
      $('html, body').animate({
        scrollTop: $('#scrollme').offset().top
      }, 1000)
    }
  }

})

.controller('FootCtrl', function ($scope) {

})
