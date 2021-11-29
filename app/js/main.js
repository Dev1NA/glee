$(function (){


  $(".related-products__items").slick({
    
    slidesToShow: 4,
    slidesToScroll: 1,
  });


  $(".product-tabs__item").on("click", function (e) {
    e.preventDefault();
    $(".product-tabs__item").removeClass("product-tabs__item--active");
    $(this).addClass("product-tabs__item--active");

    $(".product-tabs__content-item").removeClass(
      "product-tabs__content-item--active"
    );
    $($(this).attr("href")).addClass("product-tabs__content-item--active");
  });


  $(".product-one__input").styler();

  $(".product-slide__thumb").slick({
    asNavFor: ".product-slide__big",
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    draggable: false,
  });
  $(".product-slide__big").slick({
    asNavFor: ".product-slide__thumb",
    draggable: false,
    arrows: false,
    fade: true,
  });


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
  $(".list2-item__star, .product-one__star").rateYo({
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
