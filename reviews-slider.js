document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('.carousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 6000,  // Cycle every 5 seconds
        wrap: true,      // Loop the carousel
        slide: true      // Enable sliding transition
    });
});
