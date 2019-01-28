'use strict';

/*
****************** Variables
* */
/*Google Map*/
const mapBlock = document.getElementById('map');
/*form*/
const form = document.querySelectorAll('form');
/*slider steps*/
const sliderSteps = document.querySelector('.steps .slider_box');
/*slider about*/
const sliderAbout = document.querySelector('.aboutus .slider_box');
/*faq tabs*/
const faqTabs = document.querySelector('.faq_questions');
/*popup arr*/
const popup = document.querySelectorAll('.popup');
/*menu*/
const header = document.querySelector('.header_main');
/*answer*/
const arrAnswer = document.querySelectorAll('.a_item');
/*tel input*/
const telInput = document.querySelectorAll('[name="phone"]');
/*portfolio*/
const portfolio = document.querySelector('.portfolio_list');

if (header !== null) {
    (require('./functions/menu'))(header);
}

if (portfolio !== null) {
    require('./functions/portfolio')();
}

/*Form checkbox check*/
if (form.length > 0) {
    const check = require('./functions/checkFunction');
    check('#accept', 'button');
}

/*Steps Slider*/
if (sliderSteps !== null) {
    (require('./functions/stepSlider'))(sliderSteps);
}

/*About Slider*/
if (sliderAbout !== null) {
    (require('./functions/aboutSlider'))(sliderAbout);
}

/*Faq Tabs*/
if (faqTabs !== null) {
    (require('./functions/faqTabs'))(faqTabs);
}

/*Map Options*/
if (mapBlock !== null) {
    const scriptMap = document.createElement('script');
    scriptMap.setAttribute('src', 'dist/js/mapGoogle.js');
    document.body.appendChild(scriptMap);
}


/*popup*/
if (popup.length > 0) {
    (require('./functions/popup'))();
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