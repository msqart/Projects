'use strict';
/*Glide*/
import Glide from '@glidejs/glide';

/*
*
**************** Variables
*
* */

/*Lang choose*/
const lang = document.querySelector('.header_top_lang');
const langList = document.querySelector('.lang_list');
/*Map*/
const mapBlock = document.querySelector('#map');
/*Input*/
const telInput = document.querySelectorAll('input[name="phone"]');
const input = document.querySelectorAll('input');
/*Arrow Up (Scroll to Top)*/
const arrowUp = document.querySelector('.arrow_up');
/*Header*/
const header = document.querySelector('.header');
/*Left side of Article page (Filter)*/
const leftArticleElem = document.querySelectorAll('.a_b_l_parent');
/*width window*/
let documentWidth = document.documentElement.clientWidth;
/*burger menu*/
const burgerMenu = document.querySelector('.nav_burger');
/*navigation*/
const nav = document.querySelector('.nav');
/*close navigation*/
const navCls = document.querySelector('.nav_cls');
/*navigation list*/
const navList = document.querySelector('.nav_list');


/*mobile menu set active on click*/
let mobileMenu = null;
if (navList !== null) {
    mobileMenu = require('./modules/functions/mobileNav');
    mobileMenu(navList, burgerMenu, navCls, nav);
}

let leftArticle = null;
if (navList !== null) {
    leftArticle = require('./modules/functions/leftArticle');
    leftArticle(leftArticleElem);
}

/*scroll header*/
let scrollHeader = null;
if (header !== null && documentWidth > 1360) {
    scrollHeader = require('./modules/functions/scrollMenu');
    scrollHeader(header);
}
/*scroll burger*/
let scrollBurger = null;
if (header !== null && burgerMenu !== null && documentWidth < 768) {
    scrollBurger = require('./modules/functions/scrollBurger');
    scrollBurger(header, burgerMenu);
}

requestAnimationFrame(function animate() {
    /*scroll header*/
    if (scrollHeader !== null) {
        scrollHeader(header);
    }
    requestAnimationFrame(animate);
});

requestAnimationFrame(function animate() {
    /*scroll header*/
    if (scrollBurger !== null) {
        scrollBurger(header, burgerMenu);
    }
    requestAnimationFrame(animate);
});


/*arrow top active*/
let scrollTop = null;
if (arrowUp !== null && documentWidth > 920) {
    scrollTop = require('./modules/functions/scrollTop');
    scrollTop(arrowUp);
}

requestAnimationFrame(function animate() {

    if (scrollTop !== null) {
        scrollTop(arrowUp);
    }
    requestAnimationFrame(animate);
});

/* scroll to top*/
arrowUp.addEventListener('click', (even) => {
    even.preventDefault();
    scrollToTop();
});

function scrollToTop() {
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

let inputFocus = null;
if (input.length > 0) {
    inputFocus = require('./modules/functions/inputFocus');
    inputFocus(input);
}

lang.addEventListener('mouseover', () => {
    langList.classList.add('active');
});
lang.addEventListener('mouseout', () => {
    langList.classList.remove('active');
});


/*Slider Options*/
if (document.querySelectorAll('.main_slide').length > 0) {
    const glide = new Glide('.main_slide', {
        gap: 0,
        type: 'slider',
        startAt: 0,
        autoplay: 6000,
        perView: 1,
        focusAt: 0,
        setActive: 'active',
        animationDuration: 300,
        animationTimingFunc: "ease-in",
        hoverpause: false,
        classes: {
            activeSlide: 'active',
            activeNav: 'active'
        }
    });
    glide.mount();
}

/*Map Options*/
if (mapBlock !== null) {
    const scriptMap = document.createElement('script');
    scriptMap.setAttribute('src', 'dist/js/mapGoogle.js');
    document.body.appendChild(scriptMap);
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

/*scroll reveal*/
(require('./modules/scrollreveal'))();

