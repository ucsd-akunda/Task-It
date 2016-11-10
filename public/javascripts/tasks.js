// Get the modal
var modal = document.getElementById('addModal');

// Get the button that opens the modal
var btn = document.getElementById('addBtn');

var closemodal = document.getElementById('closemodal');
var donelist = document.getElementById('donelist');

//$('.list-group-item').click(deleteItem);


//searches for everyhing that in ID grab and grab whole thing it should move (append)
//$(document).ready(function(){

  //  $('#grab.list-group-item').appendTo('#donelist');
//});

//$('.list-group-item').click(deleteItem);


$('.btn').click(function(){
    $('.list-group-item').appendTo('#donelist');

});




function deleteItem(event) {
  //  console.log(event);
    // $(event.target).fadeOut();
    $(donelist).append(event.target);
}

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

closemodal.onclick = function() {
        modal.style.display = "none";
    }
    /* // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        } 
    } */


$(function() {
    $(".flatpickr").flatpickr({
        // disable opening calendar by clicking on input
        dateFormat: "m-d-Y"
    });
});

function sortDescending(a, b) {
    var date1 = $(a).find(".year").text();
    date1 = date1.split('-');
    date1 = new Date(date1[2], date1[0], date1[1] - 1);
    var date2 = $(b).find(".year").text();
    date2 = date2.split('-');
    date2 = new Date(date2[2], date2[0], date2[1] - 1);

    return date1 > date2 ? 1 : -1;
};
$(document).ready(function() {
    $('#testing .list-group-item').sort(sortDescending).appendTo('#testing');
});
