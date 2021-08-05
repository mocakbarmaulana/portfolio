$(window).scroll(function () {
  if ($(window).scrollTop() > 50) {
    $("header").addClass("fixed");
    $(".btn-to-top").css("display", "block");
  } else {
    $(".btn-to-top").css("display", "none");
    $("header").removeClass("fixed");
  }
});

$(".menu-burger").on("click", function () {
  $(this).toggleClass("active");
  $(".navbar-menu").toggleClass("active");
});

$(".btn-to-top").click(function () {
  scroll(0, 0);
});

$(document).ready(function(){
  $(".projects-box").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
    image: {
      titleSrc: function(item) {
        console.log(item);
          return item.el.attr('title') + ` <a href=${item.el.attr('link')} class="link-project">view project</a>`;
        }
    }
  });
})