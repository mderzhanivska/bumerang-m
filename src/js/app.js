
import $ from 'jquery';
import 'slick-carousel';


$('#carousel').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    }
  ]
});

