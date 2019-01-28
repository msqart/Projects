'use strict';

/*
*
************** Variables
*
*/
/*top slider*/
const coffeeSlider = document.querySelectorAll('.list_coffee_slider');
/*gallery*/
const gallerySlider = document.querySelector('.gallery_slider');
/*slider controls*/
const sliderControls = document.querySelector('.slider_control');
/*header*/
const header = document.querySelector('.header_main');
/*burger menu*/
const burgerMenu = document.querySelector('.burger_menu');
/*nav*/
const nav = document.querySelector('.nav');
/*parallax*/
const parallax = document.querySelectorAll('.parallax');
/*form data*/
const arrFormData = document.querySelectorAll('.form_data');
/*popups*/
const popup = document.querySelectorAll('.popup');

/*popup*/
if (popup.length > 0) {
    require('./modules/popup')(popup);
}

/*form data*/
if (arrFormData.length > 0) {
    (require('./modules/feedback'))(arrFormData);
}
/*scroll to*/
if (nav !== null) {
    require('./modules/scrollTo')(nav);
}
/*parallax*/
if (parallax.length > 0) {
    require('./modules/scrollParallax')(parallax);
}
/*mobile menu*/
if (nav !== null) {
    require('./modules/mobileMenu')(header, nav, burgerMenu);
}
/*header scroll*/
if (header !== null) {
    require('./modules/topMenu')(header, nav);
}
/*gallery slider*/
if (gallerySlider !== null) {
    require('./modules/gallerySlider')(gallerySlider, sliderControls);
}
/*open img gallery*/
if (gallerySlider !== null) {
    require('./modules/openImg')(gallerySlider);
}

/*top slider*/
import Glide from "@glidejs/glide";

if (coffeeSlider.length > 0) {
    const glide = new Glide('.list_coffee_slider', {
        gap: 0,
        type: 'carousel',
        startAt: 0,
        perView: 3,
        focusAt: 0,
        setActive: 'active',
        classes: {
            activeSlide: 'active',
            activeNav: 'active'
        },
        breakpoints: {
            1360: {
                perView: 2,
                startAt: 0,
            },
            960: {
                perView: 1,
                startAt: 0,
            },
            320: {
                perView: 1,
                startAt: 0,
            }
        }
    });
    glide.mount();
}




