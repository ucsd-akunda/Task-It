// gets the all group modal 
var friendmodal = document.getElementById('friend-modal');

//button that you will click 
var addfriend = document.getElementById('add-friend');

var closemodal = document.getElementById('closemodal');

addfriend.onclick = function() {
	friendmodal.style.display = "block";
}

closemodal.onclick = function(){
	friendmodal.style.display = "none";
}
