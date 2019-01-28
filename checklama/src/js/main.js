;
(() => {
    'use strict';

    /*
    *Variables
    */
    /*animation wave search*/
    const searchSectionBg = document.querySelector('.search_section_bg');
    /*advantages elements*/
    const advantages = document.querySelector('.advantages_list');
    /*main search*/
    const mainSearchForm = document.querySelector('#main_search');
    /*mobile btn*/
    const mobileMenu = document.querySelector('.nav_mobile_btn');
    /*nav*/
    const mainNav = document.querySelector('.nav_wrap');

    /*animation wave search*/
    // if (searchSectionBg !== null) {
    //     (require('./modules/waveSearch'))(searchSectionBg);
    // }

    /*advantages elements*/

    if (advantages !== null) {
        (require('./modules/advantageElem'))(advantages);
    }

    /*main search*/
    if (mainSearchForm !== null) {
        (require('./modules/searchErrors'))(mainSearchForm);
    }
    /*mobile menu*/
    if (mobileMenu !== null) {
        (require('./modules/mobileMenu'))(mobileMenu);
    }

    if (mainNav !== null) {
        (require('./modules/popup'))(mainNav);
    }

})();
