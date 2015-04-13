//= require_tree .
//= require jquery-2.1.3.min

var main = function() {
  /* Push the body and the nav over by 400px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "400px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-400px"
    }, 200);

    $('body').animate({
      left: "0px",
    }, 200);
  });
};


$(document).ready(main);