'use strict';
/*
***************** Variables
*/
const burgerMenu = document.querySelector('.burger_menu');
/*about*/
const about = document.querySelector('.main_about');
/*calc*/
const calc = document.querySelectorAll('.calc_wrap .calc_box');
/*calc btn*/
const calcBtn = document.querySelectorAll('.take_top__right .calc_btn .btn');
/*arr feedback*/
const arrForm = document.querySelectorAll('.formFeedback');

/*input tel*/
const telInput = document.querySelectorAll('input[name="phone"]');
/*feedback calc */
const calcWrap = document.querySelector('.calc_wrap');

/*header*/
const header = document.querySelector('.header_main');

/*glide js*/
import Glide from '@glidejs/glide';


/*burger menu*/
if (burgerMenu != null) {
    (require('./modules/functions/mobileMenu')(burgerMenu));
}


/*scroll header*/
let scrollHeader = null;
if (header !== null) {
    scrollHeader = require('./modules/functions/scrollMenu');
    scrollHeader(header);
}

requestAnimationFrame(function animate() {
    /*scroll header*/
    if (scrollHeader !== null) {
        scrollHeader(header);
    }
    requestAnimationFrame(animate);
});


/*animation scroll*/
let heightWindow = window.innerHeight;
const animationElem = document.querySelectorAll('.animation_scroll');
(require('./modules/functions/animElem'));
let scrollFunc = null;
if (animationElem.length > 0) {
    scrollFunc = require('./modules/functions/animElem');
    scrollFunc(animationElem, heightWindow);
}

/*calc*/
if (calc.length > 0) {

    const calcFunc = require('./modules/calc');
    for (let i = 0; i < calc.length; i++) {
        calcFunc(calc[i]);
    }
}

/*calc btn*/

if (calcBtn.length > 0 && calc.length > 0) {
    (require('./modules/calcBtn'))(calcBtn, calc);
}

requestAnimationFrame(function animate() {
    /*scroll quarters content*/
    if (animationElem.length > 0) {
        scrollFunc(animationElem, heightWindow);
    }

    requestAnimationFrame(animate);
});

/*arr feedback*/
if (arrForm.length > 0) {
    (require('./modules/feedback'))(arrForm);
}

/*scrollreveal*/
(require('./modules/functions/scrollreveal'))();

/*popup*/
(require('./modules/functions/popup'))();

/*/!*slider*!/
(require('./functions/slider'))();*/

/*feedback calc */
if (calcWrap !== null) {
    (require('./modules/feedbackCalc'))(calcWrap);
}

/*seo more*/
if (about !== null) {
    (require('./modules/functions/help'))(about);
}

if (document.querySelectorAll('.glide').length > 0) {
    const glide = new Glide('.glide', {
        classes: {
            activeNav: 'active',
            activeSlide: 'active'
        },
        gap: 70,
        type: 'carousel',
        startAt: 0,
        perView: 1,
        focusAt: 0,
        setActive: 'active',
        breakpoints: {
            1170: {
                perView: 1,
                startAt: 0,
            }
        }
    });
    glide.mount();
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

