$(window).scroll(function() {

  var wScroll = $(this).scrollTop()

  var nav = 0
  var arrow = 0
  var space = $(this).height() - ($(this).height() - $(this).width()*0.21)/2

  if (wScroll < space || wScroll > $(this).height()-65) nav = 0
  else nav = ((wScroll - space) / ($(this).height() - (space + 70)))

  if (wScroll < space) arrow = 0
  else arrow = ((wScroll - space) / ($(this).height() - (space + 70)))

  $("#main-logo").css({ 'opacity' : 1 - wScroll / 300 })

  $(".navigation-menu-button").css({ 'opacity' : 1 - nav })
  $("#main-arrow").css({ 'opacity' : 1 - arrow })

})
