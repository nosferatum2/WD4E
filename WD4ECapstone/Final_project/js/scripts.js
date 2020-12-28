

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

	//need to rewrite to JS, not jQuery.

    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
});

// ===================== Back to Top Button ========================== 



// ===================== Google map ========================== 
function initMap() {
  // The location of Zmiev steeps
  const zmSteeps = {
    lat: 49.660608,
    lng: 36.352396
  };
  // The map, centered of Zmiev steeps
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: zmSteeps,
  });
  // The marker, positioned of Zmiev steeps
  const marker = new google.maps.Marker({
    position: zmSteeps,
    map: map,
  });
}

// ===================== Show more button ========================== 
function moreContent() {
  var more = document.getElementsByClassName("morecontent")[0];
  var addcont = document.getElementById('addcont');
  var listOfImg = [
    'DJI_0003.jpg', 
    'DJI_0006.jpg', 
    'DJI_0013.jpg', 
    'DJI_0014.jpg', 
    'DJI_0024.jpg', 
    'DJI_0029.jpg'
    ];

  for (i = 0, len = listOfImg.length; i < len; i++){
  	var imag = new Image();
    imag.src = 'assets/photos/' + listOfImg[i];
    imag.alt = 'alt';
    imag.className = 'img-thumbnail';
    addcont.appendChild(imag);
  }
  
  more.style.visibility = "hidden";
  more.style.padding = "0";
} 



// ===================== Courusel download in a screen ========================== 
// If min-width: 768px, download courusel

// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     document.body.style.backgroundColor = "yellow";
//   } else {
//    document.body.style.backgroundColor = "pink";
//   }
// }
// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes

