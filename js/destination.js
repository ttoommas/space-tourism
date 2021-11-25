$(document).ready(function(){
  $(".destination__links .btn").on("click", function(){
    var link = $(this).data("link");

    if(!$("#" + link).hasClass("active")){
      //RIGHT CONTENT
      //Add activated class when click to different link(btn) which has active class
      $(".right__content.activated").removeClass("activated");
      $(".right__content.active").addClass("activated");

      //Add active class and remove when click to different link(btn)
      $(".right__content.active").removeClass("active");
      $("#" + link).addClass("active");

      //Remove start class and add activated class
      $(".right__content.start").addClass("activated");
      $(".right__content.start").removeClass('start');


      //LINKS
      //Add activated class when click to different link(btn) which has active class
      $(".btn.activated").removeClass("activated");
      $(".btn.active").addClass("activated");

      //Add active class and remove when click to different link(btn)
      $(".destination__links .btn.active").removeClass("active");
      $(this).addClass("active");

      //Remove start class and add activated class
      $(".btn.start").addClass("activated");
      $(".btn.start").removeClass('start');


      //IMAGE
      //Add activated class when click to different link(btn) which has active class
      $(".destination__img__container .destination__img.activated").removeClass("activated");
      $(".destination__img__container .destination__img.active").addClass("activated");

      //Add active class and remove when click to different link(btn)
      $(".destination__img__container .destination__img.activated").removeClass('active');
      $(".destination__img__container .destination__img[data-imgs='" + link + "']").addClass("active");

      //Remove start class and add activated class
      $(".destination__img__container .destination__img.start").addClass("activated");
      $(".destination__img__container .destination__img.start").removeClass("start");
    }
  })
})