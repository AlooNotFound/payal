 import '../../node_modules/swiper/dist/js/swiper.min.js';
// import Swiper from 'swiper';

var radSwiper = new Swiper('.swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplay: 5000,
});
radSwiper.on('slideChange', function () {
    document.querySelectorAll('.video').forEach(iframe => {
        iframe.setAttribute('src', iframe.getAttribute('src'));
    });
    document.querySelectorAll('.video').forEach(video => {
        video.setAttribute('src', video.getAttribute('src'));
    });
});