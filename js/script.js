/* SwiperProducrs
**************************************************************/
var swiperUpdSlider = Swiper;
var init = false;



/* Which media query
**************************************************************/
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1439px)');
    let desktop = window.matchMedia('(min-width: 1440px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            swiperUpdSlider = new Swiper(".swiperUpdSlider", {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 30,
                centeredSlides: true,
                loop: true,
            });
        }

    }

    // Disable (for tablet)
    else if(tablet.matches) {
        if (!init) {
            init = true;
            swiperUpdSlider = new Swiper(".swiperUpdSlider", {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 30,
                centeredSlides: true,
                loop: true,
            });
        }
    }

    // Disable (for desktop)
    else if(desktop.matches) {
        swiperUpdSlider.destroy();
        init = false;
    }
}

/* On Load
**************************************************************/
window.addEventListener('load', function() {
    swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
    console.log('resized');
    swiperMode();
});


const openMenuBtn = document.querySelector('.menu-btn-burger');
const closeMenuBtn = document.querySelector('.menu-btn-cross');
const menu = document.querySelector('.mob-menu');

function showMenu(){
    menu.classList.add('menu-open');
    openMenuBtn.classList.remove('visible');
    closeMenuBtn.classList.add('visible');
}
function closeMenu(){
    menu.classList.remove('menu-open');
    openMenuBtn.classList.add('visible');
    closeMenuBtn.classList.remove('visible');
}

openMenuBtn.addEventListener('click', (e) => {e.preventDefault(); showMenu()});
closeMenuBtn.addEventListener('click', (e) => {e.preventDefault(); closeMenu()});