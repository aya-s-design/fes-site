$(function () {
    $(window).on("scroll", function () {
      const sliderHeight = $(".main-visual").height();
      if (sliderHeight - 10 < $(this).scrollTop()) {
        $(".header").addClass("background");
      } else {
        $(".header").removeClass("background");
      }
    });
  });