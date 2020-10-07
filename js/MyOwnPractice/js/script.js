// name = prompt("What's your name?");
// alert("Hello, " + name);

// document.write("<h1>Hello World!</h1>");


function sayHi(){
	document.getElementById('test').innerHTML = "Hello World";
}

setTimeout(sayHi, 1000);

// var name = prompt("What is your name?");
// var date = Date();
// document.write(name);

/*Name this external file gallery.js*/

function upDate(previewPic){

 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */

 	//sintax of CSS is the background-image: url(''); and we need to add "url('" + source + "')"
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById('image').innerHTML = previewPic.alt;
}
   
   


function unDo(){

 /* In this function you should 
1) Update the url for the background image of the div with the id = "image" 
back to the orginal-image.  You can use the css code to see what that original URL was

2) Change the text  of the div with the id = "image" 
back to the original text.  You can use the html code to see what that original text was
*/
	document.getElementById('image').style.backgroundImage = "url('')";
	document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}