var popup = document.getElementById('myModal');
var myButton = document.getElementById("btn");
var span = document.getElementsByClassName("end")[0];
myButton.onclick = function() {
   popup.style.display = "block";
}
span.onclick = function() {
   popup.style.display = "none";
}



