/* This adjusts content's margin-top by a variable amount
   that's based on the height of what's in fixedheader
   Uses document ready [page loading] and resize [window resize] events */

/* Events call only one function, so all functions put together */

function padding(){
  var headerHeight = $('.header').height() //height of header
  var viewportHeight = $(window).height() //height of browser's viewport
  var desktopMenu = $('#desktop-menu').height() //height of browser's viewport
  var mobileMenu = $('#mobile-menu').height() //height of browser's viewport

  var scrollableHeight = viewportHeight - headerHeight - desktopMenu - mobileMenu;

  $('.scrollableContainer').css({
      'height': scrollableHeight -10 + 'px'
  })
}

$(window)
.on('resize', padding)
.on('load', padding);

$(document)
.ready(setTimeout(padding, 200)); // give time for header to load


//bust cache on back button (mobile)
$(window).bind("pageshow", function(event) {
  if (event.originalEvent.persisted) {
    window.location.reload();
  }
});
