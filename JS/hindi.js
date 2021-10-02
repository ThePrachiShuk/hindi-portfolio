//----------------------------Modal-contact me-----------------------------

// Get the modal
var modal = document.getElementById("popUpBox");

// Get the button that opens the modal
var btn = document.getElementById("popUpBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//-------------------------Modal Contact me Ends------------------------


//-------------------------Modal Vaachan-------------------------------
// Get the modal1
var modal1 = document.getElementById("popUpBox1");

// Get the button that opens the modal1
var btn1 = document.getElementById("vaachan");

// Get the <span1> element that closes the modal1
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal1
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span1> (x), close the modal1
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal1, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
//-----------------------Modal Vaachan Ends----------------------------


// Get the modal1
var modal2 = document.getElementById("popUpBox2");

// Get the button that opens the modal1
var btn2 = document.getElementById("vaachan-vid");

// Get the <span1> element that closes the modal1
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal1
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span1> (x), close the modal1
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal1, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


//MArks Modal
// Get the modal1
var modal3 = document.getElementById("popUpBox3");

// Get the button that opens the modal1
var btn3 = document.getElementById("marks-btn");

// Get the <span1> element that closes the modal1
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal1
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span1> (x), close the modal1
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal1, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}