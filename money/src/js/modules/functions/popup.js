module.exports = () => {

    const clsBtn = document.querySelectorAll('.popup_cls');
    const arrPopup = document.querySelectorAll('.popup');
    const loginBtn = document.querySelectorAll('.log_in');
    const moreBtn = document.querySelectorAll('.more');
    const loginPopup = document.querySelector('[data-popup-name="login"]');
    const callPopup = document.querySelector('[data-popup-name="more"]');
    const successPopup = document.querySelector('[data-popup-name="success"]');

    const removeFunc = require('./removeScroll');


    if (arrPopup !== null) {
        for (let o = 0; o < clsBtn.length; o++) {
            clsBtn[o].addEventListener('click', (even) => {
                even.preventDefault();
                for (let i = 0; i < arrPopup.length; i++) {
                    arrPopup[i].classList.remove('active');
                    removeFunc(false, arrPopup[i]);
                }
            });
        }

        function openPopup(arr, item) {
            for (let i = 0; i < arr.length; i++) {
                arr[i].addEventListener('click', (even) => {
                    even.preventDefault();
                    item.classList.add('active');
                    removeFunc(true, item);
                });
            }
        }

        if (successPopup.classList.contains('active')) {
            removeFunc(true, successPopup);
        }
    }
    for (let i = 0; i < arrPopup.length; i++) {
        arrPopup[i].addEventListener('click', (even) => {
            if (even.target.classList.contains('popup')) {
                arrPopup[i].classList.remove('active');
                removeFunc(false, arrPopup[i]);
            }
        });
    }

    document.addEventListener('keydown', (even) => {
        even = even || window.event;
        if (even.keyCode === 27) {
            if (arrPopup !== null) {
                for (let i = 0; i < arrPopup.length; i++) {
                    arrPopup[i].classList.remove('active');
                    removeFunc(false, arrPopup[i]);
                }
            }
        }
    });


    openPopup(loginBtn, loginPopup);
    openPopup(moreBtn, callPopup);


};