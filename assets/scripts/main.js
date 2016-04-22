$(document).ready( function() {

	height = $(window).height();

	adjustContainers();
	$(window).resize(function(){
	    adjustContainers();
	});

	$(window).scroll(function(){
		$(window).scrollTop() >= height ? $('.to-top').fadeIn() : $('.to-top').fadeOut();
	});
	
	$('.nav-links a').click( function(e) {
		e.preventDefault();
		var sectionId = $(this).attr('href');
		$("html, body").animate({ scrollTop: $(sectionId).offset().top }, 750);
	})

	$('body').on('click', '.toggle-section', function(e) {
		e.preventDefault();
		$(this).toggleClass('expanded');
		var expanded = $(this).hasClass('expanded');

		// The height we are adjusting to is either the real height of the right 
		// section (for expanded) plus the height of the "show more" div or the height of the browser
		var toggleHeight = expanded ? ($('#skills .right-section')[0].scrollHeight + 30) : height;
		
		// Add the show/hide element
		if(expanded) {
			$(this).html("Show Less <span class='glyphicon glyphicon-chevron-up'></span>");
		} else {
			$(this).html("Show More <span class='glyphicon glyphicon-chevron-down'></span>");
		}

		if($(window).width() > 991) {
			$("#skills .right-section, #skills .left-section").animate({
				'height':toggleHeight
			}, 750);
		} else {
			$("#skills .right-section").animate({
				'height': toggleHeight
			}, 750);
		}
		
	})
});

function adjustContainers() {

	// Make intro section the same height as the browser window
	if($(window).width() > 650) {
		$('.intro').css('height', height);
		// Make floated child divs in each section in same height
		$('.section').each(function() {
			// Set the left section height to the same height as the right section
			$(this).find('.left-section').css({'height':$(this).find('.right-section').outerHeight()});
		});
	} else {
		$('.intro, .left-section').css('height', height);
	}
	

	// The skills section is very long so let's do some show/hide on desktop
	$("#skills .right-section, #skills .left-section").css({'height':height,'overflow':'hidden'});
	$('#skills .right-section').append(
		"<a href='#' class='toggle-section'>Show More <span class='glyphicon glyphicon-chevron-down'></span></a>");

	// Centering in dynamic height div
	$('.left-section').each( function() {

		$('.left-section .title').css('padding-top', + $(this).outerHeight() / 3 + "px");
	})

	$('.intro').css('padding-top', + height / 10 + "px");
}



	