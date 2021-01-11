
// ===================== Navbar and show "Go to top" Button ========================== 
// When the user scrolls down, hides the navbar, pop-up "Go to top" Button. 
// When the user scrolls up, shows the navbar, hides "Go to top" Button.

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var mybutton = document.getElementById("goTop"); //find button
  var currentScrollPos = window.pageYOffset;
  var el = document.getElementById("navbar");
  if (prevScrollpos > currentScrollPos) {
    el.classList.remove("nav-hide");
    mybutton.style.display = "none";  //hide button
  } else {
    el.classList.add("nav-hide");
    mybutton.style.display = "block"; //show button
  }
  prevScrollpos = currentScrollPos;
} 

// Close an open collapsed navbar when clicking outside of the navbar element
// Close dropdown menu
$(document).click(function (event) {

	//need to rewrite to JS, not jQuery.

    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
});

// ===================== Go to top Button logic ========================== 
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ===================== Show more button ========================== 
function moreContent() {
  var more = document.getElementsByClassName("morecontent")[0]; //Here would be better ById. Its demonstrate that i understand how to using array.
  var addcont = document.getElementById('addcont');
  var listOfImg = [
    'DJI_0006.jpg', 
    'DJI_0031.jpg', 
    'DJI_0032.jpg', 
    'DJI_0033.jpg', 
    'DJI_0034.jpg', 
    'DJI_0035.jpg',
    'DJI_0036.jpg',
    'DJI_0037.jpg',
    'DJI_0038.jpg'
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

