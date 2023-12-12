$(function () {
  //*loding screen
  $(window).on("load", function () {
    $(".loadScreen").removeClass("active");
  });
  //*loding screen ends

  //*navbar starts
  $(window).scroll(function () {
    let scroll = (100 / $("body").height()) * $(window).scrollTop();

    if (scroll > 25) {
      $("nav").addClass("fixed");
    } else {
      $("nav").removeClass("fixed");
    }
  });
  //*navbar ends
});
