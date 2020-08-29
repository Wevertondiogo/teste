$(".carousel").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: '<div class="next"><i class="fa fa-angle-right fa-2x"></i></div>',
  prevArrow: '<div class="prev"><i class="fa fa-angle-left fa-2x"></i></div>',
});

$(".carousel-mobile").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<div class="next"><i class="fa fa-angle-right fa-2x"></i></div>',
  prevArrow: '<div class="prev"><i class="fa fa-angle-left fa-2x"></i></div>',
});

const q = (q) => document.querySelector(q);

const form = q(".form-group");

// const formMovie = () => {
//   form.offsetTop <= pageYOffset ? (form.style.position = "fixed") : "";
// };
