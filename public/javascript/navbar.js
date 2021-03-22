
// ! For Navbar toogle

$(document).ready(function() {
    var fixHeight = function() {
      $('.navbar-nav').css(
        'max-height',
        document.documentElement.clientHeight - 150
      );
    };
    fixHeight();
    $(window).resize(function() {
      fixHeight();
    });
    $('.navbar .navbar-toggler').on('click', function() {
      fixHeight();
    });
    $('.navbar-toggler, .overlay').on('click', function() {
      $('.mobileMenu, .overlay').toggleClass('open');
    });
  });

  // document.querySelector(".about-opt").addEventListener("click",hide);
  // function hide{
  //   document.querySelector(".mobileMenu").classList.add(".hide-on-active");
  // }
    // document.querySelector(".mobileMenu").classList.add(".hide-on-active")


  // !For tab switch animation
  // const currentLocation = location.href;
  // const menuItem = document.querySelectorAll('.nav-link');
  // const menuLength = menuItem.length;
  // for(let i=0; i<menuLength; i++){
  //   if(menuItem[i].href === currentLocation){
  //     menuItem[i].classList.add("active");
  //   }
  // }