$(document).ready(function () {
  // Mobile Nav
  const $mobileNav = $(".mobile-nav");

  $(".open-mob-menu").on("click", function () {
    $mobileNav.addClass("active");
  });

  $(".close-mob-menu").on("click", function () {
    $mobileNav.removeClass("active");
  });

  // Owl Carousel
  $(".clients-owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 0,
    autoplayHoverPause: false,
    slideTransition: "linear",

    responsive: {
      0: { items: 3, margin: 10 },
      768: { items: 4 },
      1025: { items: 5, margin: 20 },
      1200: { items: 6 },
      1366: { items: 7 },
    },
  });

  // Vertical owlCarousel
  $(".v-testimomial-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    animateOut: "slideOutUp",
    animateIn: "slideInUp",
    mouseDrag: false,
    touchDrag: false,
  });
});
