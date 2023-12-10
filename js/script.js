var swiper = new Swiper(".car-swiper", {
  effect: "fade",
  loop: "infinite",
  navigation: {
    nextEl: ".swiper-next-button",
    prevEl: ".swiper-prev-button",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

swiper.on("slideChange", function (sld) {
  document.body.setAttribute("data-sld", sld.realIndex);
});
