module.exports = () => {
    const navEnter = document.querySelectorAll('.nav_enter');
    const navSupp = document.querySelectorAll('.nav_support');
    const navReg = document.querySelectorAll('.nav_reg');
    const popup = document.querySelector('.popup');
    const popupArr = document.querySelectorAll('.popup');
    const popupEnter = document.querySelector('.popup_enter');
    const popupReg = document.querySelector('.popup_reg');
    const popupSupp = document.querySelector('.popup_supp');
    const clsPopup = document.querySelectorAll('.cls_form');
    const removeScroll = require('./removeScroll');

    for (let i = 0; i < popupArr.length; i++) {
        popupArr[i].addEventListener('click', (even) => {
            if (even.target.classList.contains('popup')) {
                popupArr[i].classList.remove('active');
                removeScroll(false, popupArr[i]);
            }
        });
    }


    if (navEnter !== null) {
        for (let i = 0; i < navEnter.length; i++) {
            navEnter[i].addEventListener('click', (e) => {
                e.preventDefault();
                popupEnter.classList.add('active');
                removeScroll(true, popupEnter);
            })
        }
    }
    if (navReg !== null) {
        for (let i = 0; i < navReg.length; i++) {
            navReg[i].addEventListener('click', (e) => {
                e.preventDefault();
                popupReg.classList.add('active');
                removeScroll(true, popupReg);
            })
        }
    }
    if (navSupp !== null) {
        for (let i = 0; i < navSupp.length; i++) {
            navSupp[i].addEventListener('click', (e) => {
                e.preventDefault();
                popupSupp.classList.add('active');
                removeScroll(true, popupSupp);
            })
        }
    }
    if (clsPopup !== null) {
        for (let i = 0; i < clsPopup.length; i++) {
            clsPopup[i].addEventListener('click', (e) => {
                e.preventDefault();
                popupSupp.classList.remove('active');
                popupEnter.classList.remove('active');
                popupReg.classList.remove('active');
                removeScroll(false, popupSupp);
                removeScroll(false, popupEnter);
                removeScroll(false, popupReg);
            })
        }
    }
};