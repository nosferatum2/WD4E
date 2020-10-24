// name = prompt("What's your name?");
// alert("Hello, " + name);

// document.write("<h1>Hello World!</h1>");


// msg = "Trying to ConfirmMsg"
// confirm(msg);

// prompt("Test default content", ['Hello default!']);

// function lenghtArr(arg1){
//     var images = document.getElementsByTagName[arg1];
//     // im = document.getElementsByTagName['p'];
//     // document.getElementsByTagName('p').innerHTML = "Hello World";
//     document.getElementById('lengthArray').innerHTML = images.lenght;    
// }

// lenghtArr('p');



function sayHi(){
	document.getElementById('test').innerHTML = "Hello World";
    document.getElementsByTagName('p')[1].innerHTML = "Hello World";
    
}

setTimeout(sayHi, 100);

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


//Numders valid between 1 and 5
function numValid(){
    var x, text;

    x = document.getElementById('numb').value;

    if (isNaN(x) || x < 1 || x > 5){
        text = "Input not valid!";
    } else {
        text = "Input OK";
    }
    document.getElementById('demo').innerHTML = text;
}

//Match emails
//I added else-block for myself. 
function check() {
    var email1 = document.getElementById('email_addr');
    var email2 = document.getElementById('email_repeat');
        if ( email1.value != email2.value) {
            // alert("The two emails must match!!");
            document.getElementById('noMatch').innerHTML = "The two emails must match!!";
            return false;
        } else {
            document.getElementById('noMatch').innerHTML = "";
            alert("Nice work! The form with emails is filled out correctly");

        }
}