angular.module('controllers', [])

.controller('NavigationCtrl', function ($scope, $window, scroll, resize) {

  $scope.mobile = true
  $scope.expand = false

  $scope.click = function () {
    $scope.expand = !$scope.expand
  }

  $scope.goto = function (element) {

    $scope.expand = false

    $('html, body').animate({
      scrollTop: angular.element(document.getElementById(element)).prop('offsetTop') - 64
    }, 1000)

  }

  $scope.scroll = function() {

    if ($window.scrollY > $window.innerHeight - 66)
      $scope.down = true
    else
      $scope.down = false

    $scope.$apply()

  }

  $scope.resize = function() {

    if ($window.innerWidth >= 1000) {
      $scope.mobile = false
      $scope.expand = false
    }
    else
      $scope.mobile = true

    $scope.$apply()

  }

  angular.element($window).bind('scroll', $scope.scroll).bind('resize', $scope.resize)

})

.controller('MainCtrl', function ($scope, $window) {

  angular.element($window).bind('scroll', function() {

    $scope.degrees = (($window.scrollY / $window.innerHeight - 0.3) ) * 720

    if ( $scope.degrees < 0 ) $scope.degrees = 0
    if ( $scope.degrees > 180 ) $scope.degrees = 180

    $scope.$apply()

  })

})

.controller('ArtistsCtrl', function ($scope) {

  $scope.go = function(url) {
    console.log(url)
    window.open(url)
  }

  $scope.artists = [
    {
      name: "CMS-SK",
      link: "https://vimeo.com/188008085",
      info: ""
    },
    {
      name: "DJ LOVEFUNK",
      link: "https://soundcloud.com/dj-lovefuck",
      info: ""
    },
    {
      name: "GUNGFLY",
      link: "https://www.facebook.com/Gungfly-179474678770565/",
      info: ""
    },
    {
      name: "HANNAH PRESCOTT",
      link: "https://soundcloud.com/hypsmusic/mixumdansooo",
      info: ""
    },
    {
      name: "INDIGORADO",
      link: "https://www.facebook.com/indigoradomusic/",
      info: ""
    },
    {
      name: "JANNIS DÜSTER",
      link: "https://soundcloud.com/jannis-d-ster",
      info: ""
    },
    {
      name: "LARS LANGOS",
      link: "https://soundcloud.com/lars-langos",
      info: ""
    },
    {
      name: "MAPLE RYE",
      link: "https://www.facebook.com/mapleandrye/",
      info: ""
    },
    {
      name: "OLIVER GANSLANDT",
      link: "https://www.facebook.com/songsofpresence",
      info: ""
    },
    {
      name: "ORKAN",
      link: "https://www.facebook.com/Bandetorkan",
      info: ""
    },
    {
      name: "POMONA DREAM",
      link: "https://www.facebook.com/pomonadream/",
      info: ""
    },
    {
      name: "PEDROS",
      link: "https://www.facebook.com/pedrosofsweden/",
      info: ""
    },
    {
      name: "ÅSKA SAGA",
      link: "https://www.facebook.com/askasaga111",
      info: ""
    }
  ]

})

.controller('TicketsCtrl', function ($scope) {

  $scope.state = 0

  $scope.changeState = function (state) {
    if (this.state == state) this.state = 0
    else {
      this.state = state
      // $('html, body').animate({
      //   scrollTop: $('#scrollme').offset().top
      // }, 1000)
    }
  }

})

.controller('InfoCtrl', function ($scope) {

})

.controller('FooterCtrl', function ($scope, $window) {

})
