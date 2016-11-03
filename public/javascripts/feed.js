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

	$(window).scroll(function() {
		if($(document).height() <= $(window).scrollTop() + $(window).height()) {
			console.log("End of Page!!");
		}
	})
})