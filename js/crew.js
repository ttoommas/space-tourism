$(document).ready(function(){
	$(".crew__dots .dot").on("click", function(){
		var link = $(this).data("link");

		if(!$(".bx__crew__content .crew__content[data-content='" + link + "']").hasClass("active")){
			//Dots
			//Add activated class when click to different dot which has active class
			$(".dot.activated").removeClass("activated");
			$(".dot.active").addClass("activated");

			//Add active class and remove when click to different dot
			$(".crew__dots .dot.active").removeClass("active");
			$(this).addClass("active");

			//Remove start class and activated class
			$(".dot.start").addClass("activated");
			$(".dot.start").removeClass("start");


			//Crew Content
			//Add activated class when click to different dot which has active class
			$(".crew__content.activated").removeClass("activated");
			$(".crew__content.active").addClass("activated");

			//Add active class and remove when click to different dot
			$(".bx__crew__content .crew__content.active").removeClass("active");
			$(".bx__crew__content .crew__content[data-content='" + link + "']").addClass("active");

			//Remove start class and activated class
			$(".crew__content.start").addClass("activated");
			$(".crew__content.start").removeClass("start");


			//Image
			//Add activated class when click to different dot which has active class
			$(".crew__image.activated").removeClass("activated");
			$(".crew__image.active").addClass("activated");

			//Add active class and remove when click to different dot
			$(".crew__image__bx .crew__image.active").removeClass("active");
			$(".crew__image__bx .crew__image[data-image='" + link + "']").addClass("active");

			//Remove start class and activated class
			$(".crew__image.start").addClass("activated");
			$(".crew__image.start").removeClass("start");
		};
	});
});