'use strict';
/*
*
******************** Variables
*
*/

const telInput = document.querySelectorAll('[name="phone"]');
const price = document.querySelectorAll('.weight');
const slideTopImg = document.querySelector('.s_s_a_img');
const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger_menu');
const gallery = document.querySelector('.gallery_wrap');
const galleryControls = document.querySelector('.gallery_controls');
const header = document.querySelector('.header_main');
const coffee = document.querySelector('.coffee_machine');
/*form data*/
const arrFormData = document.querySelectorAll('.form_data');
/*popups*/
const popup = document.querySelectorAll('.popup');

/*coffee slider*/
if (coffee !== null) {
    require('./modules/coffeeSlider')(coffee);
}
/*popup*/
if (popup.length > 0) {
    require('./modules/popup')(popup);
}

/*form data*/
if (arrFormData.length > 0) {
    (require('./modules/feedback'))(arrFormData);
}

if (gallery !== null) {
    require('./modules/openImg')(gallery);
}

if (gallery !== null) {
    require('./modules/gallerySlider')(gallery, galleryControls);
}

if (nav !== null) {
    require('./modules/menu')(nav, burger, header);
}

if (price !== null) {
    require('./modules/topSlider')(price, slideTopImg);
}

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