var navAnchor = document.getElementById('nav-anchor'),
    nav = document.getElementById('nav-container');

navAnchor.addEventListener('click', function(e) {
    nav.className = nav.className? '' : 'show-nav';
    e.preventDefault();
});

var fixmeTop = $('.nav-main').offset().top;
$(window).scroll(function() {
  var currentScroll = $(window).scrollTop();
  if (currentScroll >= fixmeTop) {
    $('#nav-container').addClass( 'fixed-nav' );
    $('.nav-logo').addClass( 'fixed-nav' );
    $('.nav-logo-text').addClass( 'fixed-nav' );
    $('.nav-main').addClass( 'fixed-nav' );
  } else {
    $('#nav-container').removeClass( 'fixed-nav' );
    $('.nav-logo').removeClass( 'fixed-nav' );
    $('.nav-logo-text').removeClass( 'fixed-nav' );
    $('.nav-main').removeClass( 'fixed-nav' );
  }
});