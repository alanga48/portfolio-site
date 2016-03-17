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
	
	var sectionHeight = width > 768 ? height : $('.right-section').outerHeight() + $('.left-section').outerHeight();
	$('.section').css('height', sectionHeight);
	$('.left-section .title').css('padding-top', + height / 3 + "px");
	$('.intro').css('padding-top', + height / 10 + "px");
}