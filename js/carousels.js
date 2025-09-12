document.addEventListener('DOMContentLoaded', function () {
  const commonSettings = {
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  $('.carousel-projetos').slick({
    ...commonSettings,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.carousel-especialidades').slick({
    ...commonSettings,
    slidesToShow: 3,
    autoplay: false
  });
});