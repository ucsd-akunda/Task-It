// Get the modal
var modal = document.getElementById('addModal');

// Get the button that opens the modal
var btn = document.getElementById('addBtn');

var closemodal = document.getElementById('closemodal');
var donelist = document.getElementById('donelist');

//$('.list-group-item').click(deleteItem);
$('.testing').click(deleteItem);

function deleteItem(event){
	console.log(event);
	// $(event.target).fadeOut();
	$(donelist).append(event.target);
}

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

closemodal.onclick = function(){
	modal.style.display = "none";
}
/* // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } 
} */
