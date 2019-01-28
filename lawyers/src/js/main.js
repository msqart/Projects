'use strict';
/*
********************************Variables
* */
/*init map*/
const mapBlock = document.querySelector('#map');
const openMenu = document.querySelector('.header_menu_mobile');
const header = document.querySelector('.header_main');
const scriptMap = document.createElement('script');
import Glide from '@glidejs/glide';
/*counts glide*/
const arrSliderGlide = document.querySelectorAll('.glide__slider_count');
/*top slider*/
const screenFirstIndex = document.querySelector('.screen-first-index');
/*scroll parallax*/
const Parallax = require('scroll-parallax');
/*slider five*/
const sliderFive = document.querySelectorAll('.slider_five');
const telInput = document.querySelectorAll('input[name=phone]');
/*why*/
const whyArr = document.querySelectorAll('.why .why-box-element');
const addZIndex = require('./modules/ZIndex');

/*
********************************Implementation
* */

/*top slider*/
/*if (screenFirstIndex !== null) {
    (require('./modules/sliderTop'))(screenFirstIndex);
}*/
/*scroll parallax*/
const scrollParallax = new Parallax('.parallax').init();
/*counts glide*/

const countsGlide = require('./modules/countsGlide');

for (let i = 0; i < arrSliderGlide.length; i++) {
    countsGlide(arrSliderGlide[i]);
}


if (document.querySelectorAll('.glide').length > 0) {
    const glide = new Glide('.glide', {
        gap: 0,
        type: 'carousel',
        startAt: 2,
        perView: 3,
        focusAt: 'center',
        breakpoints: {
            1170: {
                perView: 2,
                startAt: 0,
                focusAt: false
            },
            1000: {
                perView: 1,
                startAt: 0,
            },
            800: {
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
if (document.querySelectorAll('.employ-slider').length > 0) {
    const glide = new Glide('.employ-slider', {
        gap: 0,
        type: 'carousel',
        startAt: 2,
        perView: 3,
        focusAt: 'center',
        breakpoints: {
            1170: {
                perView: 3,
                startAt: 0,
            },
            1000: {
                perView: 3,
                startAt: 0,
            },
            800: {
                perView: 3,
                startAt: 0,
            },
            450: {
                perView: 1,
                startAt: 0,
            }
        }
    });
    glide.mount();
}

if (document.querySelectorAll('.glide-index-page').length > 0) {
    const glide = new Glide('.glide-index-page', {
        gap: 0,
        type: 'carousel',
        startAt: 0,
        perView: 3,
        classes: {
            activeSlide: 'index-news-el__active',
        },
        focusAt: 0,

        breakpoints: {
            1170: {
                perView: 2,
                startAt: 0,
            },
            1000: {
                perView: 2,
                startAt: 0,
            },
            800: {
                perView: 1,
                startAt: 0,
            },
            450: {
                perView: 1,
                startAt: 0,
            }
        }
    });
    glide.mount();
}

/*menu*/
if (openMenu !== null) {
    openMenu.addEventListener('click', (even) => {
        even.preventDefault();
        header.classList.toggle('open_menu');
    });
}
/*slider five*/
if (sliderFive.length > 0) {
    const sliderFiveFunc = require('./modules/sliderFive');
    for (let i = 0; i < sliderFive.length; i++) {
        sliderFiveFunc(sliderFive[i]);
    }
}

/*init map*/
if (mapBlock !== null) {
    scriptMap.setAttribute('src', 'dist/js/mapGoogle.js');
    document.body.appendChild(scriptMap);
}
/*menu on top*/
let scrollHeader = null;
if (header !== null) {
    scrollHeader = require('./modules/headerScroll');
}

requestAnimationFrame(function animate() {
    /*scroll header*/
    if (scrollHeader !== null) {
        scrollHeader(header, window.pageYOffset || document.documentElement.scrollTop >= 150);
    }
    requestAnimationFrame(animate);
});

(require('./modules/popup'))();

if (whyArr.length > 0) {
    addZIndex(whyArr);
}

/*phone mask*/
if (telInput.length > 0) {
    let vanillaTextMask = require('vanilla-text-mask');

    let phoneMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

    for (let i = 0; i < telInput.length; i++) {
        vanillaTextMask.maskInput({
            inputElement: telInput[i],
            mask: phoneMask,
            keepCharPositions: true,
            guide: false
        });
    }
}