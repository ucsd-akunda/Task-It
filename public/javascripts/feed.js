if (typeof jQuery === 'undefined') {
	throw new Error('This file requires jQuery');
}

$(document).ready(function() {
	$('.post')
	.mouseover(function(e) {
		e.preventDefault();
		$(this).css('border-left-color', 'aliceblue');
	})
	.mouseout(function(e) {
		$(this).css('border-left-color', '');
	})
})