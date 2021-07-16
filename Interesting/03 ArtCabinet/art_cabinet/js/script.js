//Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 700,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


//scroll and add/remove class
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.querySelector(".header_nav").className = "header_nav fixed_header";
    } else {
        document.querySelector(".header_nav").className = "header_nav";
    }
}
