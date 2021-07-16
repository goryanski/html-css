
        $('.img-holder').imageScroll({
//            image: null,
//            imageAttribute: 'image',
//            container: $('body'),
//            speed: 0.2,
//            coverRatio: 0.75,
//            holderClass: 'imageHolder',
//            holderMinHeight: 200,
//            extraHeight: 0,
//            mediaWidth: 1600,
//            mediaHeight: 900,
//            parallax: true,
//            touch: false
        });

// button back-to-top
function backToTop() {
        let button = $('.back-to-top');

        $(window).on('scroll', () => {
                if($(this).scrollTop() >= 50) {
                      button.fadeIn();
                } else {
                        button.fadeOut();
                }
        });
        button.on('click', (e) =>{
                e.preventDefault();
                $('html').animate({scrollTop: 0}, 1000);
        });
}


        backToTop();




        let classHidden = document.querySelector("div.contact-all");
        let classButton = document.querySelector(".button-hidden");
        classButton.addEventListener("click", function(){
            classHidden.classList.toggle("form-hidden");
        });