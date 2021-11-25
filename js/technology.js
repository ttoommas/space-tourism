$(document).ready(function(){
	$(".techno__buttons .button").on("click", function(){
		var link = $(this).data("link");

		if(!$(".bx__techno__content .techno__content[data-content='" + link + "']").hasClass("active")){
			//Buttons
			//Add active class and remove when click to different button
			$(".techno__buttons .button.active").removeClass("active");
			$(this).addClass("active");

			//Remove start class
			$(".button.start").removeClass("start");


			//Techno Content
			//Add activated class when click to different button which has active class
			$(".techno__content.activated").removeClass("activated");
			$(".techno__content.active").addClass("activated");

			//Add active class and remove when click to different button
			$(".bx__techno__content .techno__content.active").removeClass("active");
			$(".bx__techno__content .techno__content[data-content='" + link + "']").addClass("active");

			//Remove start class and activated class
			$(".techno__content.start").addClass("activated");
			$(".techno__content.start").removeClass("start");


			//Image
			//Add activated class when click to different button which has active class
			$(".techno__image.activated").removeClass("activated");
			$(".techno__image.active").addClass("activated");

			//Add active class and remove when click to different button
			$(".bx__techno__image .techno__image.active").removeClass("active");
			$(".bx__techno__image .techno__image[data-image='" + link + "']").addClass("active");

			//Remove start class and activated class
			$(".techno__image.start").addClass("activated");
			$(".techno__image.start").removeClass("start");
		};
	});
});