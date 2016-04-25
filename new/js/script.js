window.onload = function() {

  var lastTime = new Date()
  var fps = 40
  var resolution = 100
  var rotation = 0
  var radius = 100

  function positions (moveX, moveY) {

    var centerX = $(this).width() / 2
    var centerY = $(this).height() / 2

    return [
      { x: (centerX - moveX) / centerX * 5,
        y: (centerY - moveY) / centerY * 3
      },
      { x: (centerX - moveX) / centerX * 13,
        y: (centerY - moveY) / centerY * 7
      },
      { x: (centerX - moveX) / centerX * 30,
        y: (centerY - moveY) / centerY * 15
      }
    ]
  }

  $('body').mousemove(function (e) {

      move = positions(e.pageX, e.pageY)

      $('.one').css('transform', 'translate(' + move[0].x + 'px ,' + move[0].y + 'px)')
      $('.two').css('transform', 'translate(' + move[1].x + 'px ,' + move[0].y + 'px)')
      $('.three').css('transform', 'translate(' + move[2].x + 'px ,' + move[0].y + 'px)')
  })

}
