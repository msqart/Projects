'use strict';
/*
********************************Variables
* */
/*Glide*/
const mapBlock = document.getElementById('map');
import Glide from '@glidejs/glide';
/*Parallax*/
const Parallax = require('scroll-parallax');
const p = new Parallax('.parallax').init();
/*animation scroll*/
let heightWindow = window.innerHeight;
const animationElem = document.querySelectorAll('.animation_scroll');
/*popup*/
const popupBlock = document.querySelector('.popup');
/*feedback*/
const arrFeedback = document.querySelectorAll('.feed_back_data');
/*tabs*/
const tabs = document.querySelector('.tabs_elem');
/*phone mask*/
const myInput = document.querySelectorAll('input[type=tel]');
/*step*/
const step = document.querySelector('.popup_test');

/*
********************************Implementation
* */
/*Slider Options*/
if (document.querySelectorAll('.slider_review').length > 0) {
    const glide = new Glide('.slider_review', {
        gap: 70,
        type: 'carousel',
        startAt: 0,
        perView: 2,
        focusAt: 0,
        setActive: 'active',
        breakpoints: {
            1170: {
                perView: 2,
                startAt: 0,
            },
            900: {
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

/*tabs active*/
if (tabs !== null) {
    (require('./modules/tabs'))(tabs);
}

/*scrollreveal*/
(require('./modules/scrollreveal'))();

/*animation scroll*/
let scrollFunc = null;
if (animationElem.length > 0) {
    scrollFunc = require('./modules/animationScroll');
    scrollFunc(animationElem, heightWindow);
}
/*step*/
if (step !== null) {
    (require('./modules/step'))(step);
}

requestAnimationFrame(function animate() {
    /*scroll quarters content*/
    if (animationElem.length > 0) {
        scrollFunc(animationElem, heightWindow);
    }

    requestAnimationFrame(animate);
});


/*popup*/
if (popupBlock !== null) {
    (require('./modules/popup'))(popupBlock);
}
/*feedback*/
if (arrFeedback.length > 0) {
    (require('./modules/feedback'))(arrFeedback);
}
/*phone mask*/
if (myInput.length > 0) {
    let vanillaTextMask = require('vanilla-text-mask');

    let phoneMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

    for (let i = 0; i < myInput.length; i++) {
        vanillaTextMask.maskInput({
            inputElement: myInput[i],
            mask: phoneMask,
            keepCharPositions: true,
            guide: false
        });
    }
}

/*Map Options*/
if (mapBlock !== null) {
    const scriptMap = document.createElement('script');
    scriptMap.setAttribute('src', 'dist/js/mapGoogle.js');
    document.body.appendChild(scriptMap);
}
