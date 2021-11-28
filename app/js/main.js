$(function (){


  $(".filter-price__input").ionRangeSlider({
    onStart: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
    onChange: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    }
  });


  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "8px",
  });
  $(".list2-item__star").rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "8px",
  });




  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  });

          var containerEl1 = document.querySelector('[data-ref="container-1"]');
          var containerEl2 = document.querySelector('[data-ref="container-2"]');

          var config = {
            controls: {
              scope: "local",
            },
          };

          var mixer1 = mixitup(containerEl1, config);
          var mixer1 = mixitup(containerEl2, config);

});
