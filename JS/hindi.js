
var modal = document.getElementById("popUpBox");


var btn = document.getElementById("popUpBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//-------------------------Modal Contact me Ends------------------------


//-------------------------Modal Vaachan-------------------------------

var modal1 = document.getElementById("popUpBox1");


var btn1 = document.getElementById("vaachan");


var span1 = document.getElementsByClassName("close1")[0];


btn1.onclick = function() {
  modal1.style.display = "block";
}


span1.onclick = function() {
  modal1.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
//-----------------------Modal Vaachan Ends----------------------------



var modal2 = document.getElementById("popUpBox2");


var btn2 = document.getElementById("vaachan-vid");


var span2 = document.getElementsByClassName("close2")[0];


btn2.onclick = function() {
  modal2.style.display = "block";
}


span2.onclick = function() {
  modal2.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

//Marks Box

var modal3 = document.getElementById("popUpBox3");


var btn3 = document.getElementById("marks-btn");


var span3 = document.getElementsByClassName("close3")[0];


btn3.onclick = function() {
  modal3.style.display = "block";
}


span3.onclick = function() {
  modal3.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
