$(document).ready( function() {

	$('.nav-links a').click( function(e) {
		e.preventDefault();
		var sectionId = $(this).attr('href');
		$("html, body").animate({ scrollTop: $('.section'+sectionId).offset().top }, 750);
	})

});