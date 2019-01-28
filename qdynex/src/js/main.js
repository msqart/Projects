'use strict';

/*
* Variables*************************************
* */
/*input*/
const styledInput = document.querySelectorAll('.styled-input');
/*map*/
const map = document.querySelector('#map');
/*header*/
const header = document.querySelector('.header_main');
/*indicator*/
const indicator = document.querySelector('.indicator');
/*analytics*/
const analytics = document.querySelector('.analytics');
/*stages*/
const stages = document.querySelector('.stages');
/*top block*/
const topBlock = document.querySelector('.top_section');
/*form data*/
const arrFormData = document.querySelectorAll('.form_data');
/*phone mask*/
const telInput = document.querySelectorAll('input[type=tel]');
/*theme*/
const themeControl = document.querySelector('.theme_control');
/*popup type*/
const arrPopupType = document.querySelectorAll('.popup_type');
/*scroll up*/
const scrollBtn = document.querySelector('.scroll_to_up');

/*
*Performance*************************************
 */


/*theme control*/
if (themeControl !== null) {
    (require('./modules/theme'))(themeControl);
}

/*top block*/
if (topBlock !== null) {
    (require('./modules/hoverTop'))(topBlock);
}

if (styledInput.length > 0) {
    (require('./modules/input'))(styledInput);
}

/*indicator*/
if (indicator !== null) {
    (require('./modules/indicator'))(indicator);
}

/*analytics*/
if (analytics !== null) {
    (require('./modules/analytics'))(analytics);
}

/*stages*/
if (stages !== null) {
    (require('./modules/stages'))(stages);
}
/*form data*/
if (arrFormData.length > 0) {
    (require('./modules/feedback'))(arrFormData);
}

/*scroll header*/
let scrollHeader = null;
if (header !== null) {
    scrollHeader = require('./modules/functions/scrollMenu');
    scrollHeader(header);
}
if (header !== null) {
    (require('./modules/menu'))(header);
}

/*phone mask*/
if (telInput.length > 0) {
    let vanillaTextMask = require('vanilla-text-mask');

    let phoneMask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
    for (let i = 0; i < telInput.length; i++) {
        vanillaTextMask.maskInput({
            inputElement: telInput[i],
            mask: phoneMask,
            keepCharPositions: true,
            guide: false
        });
    }
}


requestAnimationFrame(function animate() {
    /*scroll header*/
    if (scrollHeader !== null) {
        scrollHeader(header);
    }
    requestAnimationFrame(animate);
});

/*scroll reveal*/
(require('./modules/scrollreveal'))();


/**/
if (arrPopupType.length > 0) {
    const hiddenScroll = require('./modules/functions/hiddenScroll');
    for (let i = 0; i < arrPopupType.length; i++) {
        let closePopup = arrPopupType[i].querySelector('.popup_type_close');
        closePopup.addEventListener('click', (even) => {
            even.preventDefault();
            arrPopupType[i].classList.remove('active');
            hiddenScroll(false, arrPopupType[i]);
        });
    }
}

/*scroll up*/
if (scrollBtn !== null) {
    (require('./modules/functions/scrollUp'))(scrollBtn, 5);
}
/*map*/
if (map !== null) {

    let nameScript = (document.body.classList.contains('white')) ? 'White' : 'Dark';
    const scriptMap = document.createElement('script');
    scriptMap.async = true;
    scriptMap.setAttribute('src', `dist/js/mapGoogle${nameScript}.js`);
    scriptMap.className = 'scriptMap';
    document.body.appendChild(scriptMap);

    const mapHttp = document.createElement('script');
    mapHttp.async = true;
    mapHttp.className = 'mapHttp';
    mapHttp.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDzrDLaTqQRrY8xss7UUDtLQxJ7S2fajj4&callback=initMap');
    document.body.appendChild(mapHttp);
}

/*video js*/
const videoJsYoutube = require('videojs-youtube');

