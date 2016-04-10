$(document).ready( function() {

	width = $(window).width();
	height = $(window).height();
	skillsSection = document.getElementById("skills");
	skillsSectionHeight = skillsSection.scrollHeight;

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
		var toggleHeight = expanded ? skillsSectionHeight : height;
		var html = expanded ? "Show Less <span class='glyphicon glyphicon-chevron-up'></span>" : "Show More <span class='glyphicon glyphicon-chevron-down'></span>";
		$(this).html(html);
		$("#skills .right-section, #skills .left-section").animate({
			'height':toggleHeight
		}, 750);
	})
});

function adjustContainers() {
	$('.intro, .right-section, .left-section').css('height', height);
	if (height < skillsSectionHeight) {
		$("#skills .right-section").append(
			"<a href='#' class='toggle-section'>Show More <span class='glyphicon glyphicon-chevron-down'></span></a>");
	}
	$('.right-section').css({'overflow':'hidden'});
	$('.left-section .title').css('padding-top', + height / 3 + "px");
	$('.intro').css('padding-top', + height / 10 + "px");
}



	