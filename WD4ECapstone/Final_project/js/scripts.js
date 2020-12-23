

// ===================== Navbar ========================== 
// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var el = document.getElementById("navbar");
  if (prevScrollpos > currentScrollPos) {
    el.classList.remove("nav-hide");
  } else {
    el.classList.add("nav-hide");
  }
  prevScrollpos = currentScrollPos;
} 

// Close an open collapsed navbar when clicking outside of the navbar element
// Close dropdown menu in the mobile view
$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
});

// ===================== Back to Top Button ========================== 
