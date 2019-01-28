'use strict';

/*
*
*
**************** Variables
*
*
*/
/*map*/
const mapBlock = document.getElementById('map');
/*slider gallery*/
const gallery = document.querySelector('.gallery');
/*up to top*/
const fixUp = document.querySelector('.fixed_up_btn');
/*call button*/
const fixCall = document.querySelector('.fixed_call_btn');
/*tel input*/
const telInput = document.querySelectorAll('[name="phone"]');
/*cls form btn*/
const arrPopup = document.querySelectorAll('.popup');
/*burger button*/
const burgerBtn = document.querySelector('.burger_menu');
/*header*/
const header = document.querySelector('.header');
/*popup img*/
const popupImg = document.querySelector('.popup_img');
/*animation scroll*/
let heightWindow = window.innerHeight;
const animationElem = document.querySelectorAll('.animation_scroll');
/*step*/
const step = document.querySelector('.steps');
/*dep elem */
const arrDepElem = document.querySelectorAll('.dep_elem');

if (header !== null) {
    (require('./modules/menu'))(header);
}


if (arrPopup.length > 0) {
    (require('./modules/functions/popup'))();
}

function scrollTop() {
    let toTopInterval = setInterval(function () {

        let supportedScrollTop = document.body.scrollTop > 0 ? document.body : document.documentElement;

        if (supportedScrollTop.scrollTop > 0) {
            supportedScrollTop.scrollTop = supportedScrollTop.scrollTop - 50;
        }

        if (supportedScrollTop.scrollTop < 1) {
            clearInterval(toTopInterval);
        }

    }, 10);
}

fixUp.addEventListener('click', (even) => {
    even.preventDefault();
    scrollTop();
});

/*step*/
if (step !== null) {
    (require('./modules/step'))(step);
}

/*Glide require*/
import Glide from '@glidejs/glide';

/*Second screen Slider Options*/
if (document.querySelectorAll('.s_slider').length > 0) {
    const glide = new Glide('.s_slider', {
        gap: 0,
        type: 'carousel',
        startAt: 0,
        perView: 1,
        focusAt: 0,
        autoplay: 3000,
        setActive: 'active',
        classes: {
            activeNav: 'active',
            activeSlide: 'active'
        }
    });
    glide.mount();
}

/*Quote screen Slider Options*/
if (document.querySelectorAll('.quote_slide').length > 0) {
    const glide = new Glide('.quote_slide', {
        gap: 0,
        type: 'carousel',
        startAt: 0,
        perView: 1,
        focusAt: 0,
        setActive: 'active',
        classes: {
            activeNav: 'active',
            activeSlide: 'active'
        }
    });
    glide.mount();
}

if (gallery !== null) {
    (require('./modules/gallery'))(gallery);
}

/*Map Options*/
if (mapBlock !== null) {
    const scriptMap = document.createElement('script');
    scriptMap.setAttribute('src', 'dist/js/mapGoogle.js');
    document.body.appendChild(scriptMap);
}

/*mask*/

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
/*popup img*/
if (popupImg !== null) {
    (require('./modules/popupImg'))(popupImg);
}
/*dep elem */
if (arrDepElem.length > 0) {
    (require('./modules/depElem'))(arrDepElem);
}


/*scroll header*/
let scrollHeader = null;
if (header !== null) {
    scrollHeader = require('./modules/functions/scrollMenu');
    scrollHeader(header, fixCall);
}

/*bottom button*/
let bottomButton = null;
if (fixCall !== null && fixUp !== null) {
    bottomButton = require('./modules/bottomButton');
    bottomButton(fixCall, fixUp);
}

requestAnimationFrame(function animate() {
    /*scroll header*/
    if (scrollHeader !== null) {
        scrollHeader(header, fixCall);
    }

    /*bottom button*/
    if (bottomButton !== null) {
        bottomButton(fixCall, fixUp);
    }


    requestAnimationFrame(animate);
});


/*animation scroll*/
let scrollFunc = null;
if (animationElem.length > 0) {
    scrollFunc = require('./modules/functions/animationScroll');
    scrollFunc(animationElem, heightWindow);
}

requestAnimationFrame(function animate() {
    /*scroll quarters content*/
    if (animationElem.length > 0) {
        scrollFunc(animationElem, heightWindow);
    }

    requestAnimationFrame(animate);
});