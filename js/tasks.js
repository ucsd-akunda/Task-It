// Get the modal
var modal = document.getElementById('addModal');

// Get the button that opens the modal
var btn = document.getElementById('addBtn');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("add")[0];

var span1 = document.getElementById("closemodal");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (add), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

span1.onclick = function(){
	modal.style.display = "none";
}
/* // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } 
} */

