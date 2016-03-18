$(document).ready( function() {

	adjustContainers();
	$(window).resize(function(){
	    adjustContainers();
	});
	
	$('.nav-links a').click( function(e) {
		e.preventDefault();
		var sectionId = $(this).attr('href');
		$("html, body").animate({ scrollTop: $('.section'+sectionId).offset().top }, 750);
	})

});

function adjustContainers() {
	var width = $(window).width();
	var height = $(window).height();
	$('.intro, .right-section, .left-section').css('height', height);
	if(width > 991) {
		// $('.intro, .right-section, .left-section').css('height', height);
		$('.right-section').css({'overflow':'hidden', 'overflow-y':'auto'});
	} else {
		$('.intro, .left-section').css('height', height);
		$('.right-section').css({'overflow':'visible', 'height':'auto', 'overflow-y':'auto'});
	}
	$('.left-section .title').css('padding-top', + height / 3 + "px");
	$('.intro').css('padding-top', + height / 10 + "px");
}

	