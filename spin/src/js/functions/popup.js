module.exports = () => {

    /*
    *
    * ***************Variables
    *
    * */
    const popupArr = document.querySelectorAll('.popup');

    const callBtn = document.querySelectorAll('.feedback');
    const signUpBtn = document.querySelectorAll('.sign_in');
    const playBtn = document.querySelectorAll('.play_p');

    const popupCall = document.querySelector('.popup[data-popup-role="call"]');
    const popupSign = document.querySelector('.popup[data-popup-role="sign"]');
    const popupVideo = document.querySelector('.popup[data-popup-role="video"]');

    const clsBtn = document.querySelectorAll('.cls_btn');

    const removeScroll = require('./removeScroll');

    document.addEventListener('keydown', (evt) => {
       evt = evt || window.event;
       if (evt.keyCode === 27) {
           for (let i = 0; i < popupArr.length; i++) {
               popupArr[i].classList.remove('active');
               removeScroll(false, popupArr[i]);
           }
       }
    });

    function openPopup(arr, elem) {
        if (arr.length > 0 && elem !== 0) {
            for (let i = 0; i < arr.length; i++) {
                arr[i].addEventListener('click', (even) => {
                    even.preventDefault();
                    elem.classList.add('active');
                    removeScroll(true, elem);
                });
            }
        }
    }

    function clsPopup (arr, btn) {
        if (1) {
            for (let i = 0; i < btn.length; i++) {
                btn[i].addEventListener('click', (even) => {
                    even.preventDefault();
                    for (let o = 0; o < arr.length; o++) {
                        arr[i].classList.remove('active');
                        removeScroll(false, arr[i]);
                    }
                });
            }
        }
    }

    function clsContains (arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].addEventListener('click', (even) => {
                if (even.target.classList.contains('popup')) {
                    arr[i].classList.remove('active');
                    removeScroll(false, arr[i]);
                }
            });
        }
    }

    clsContains(popupArr);

    /*popupCall.addEventListener('click', (even) => {
        if (even.target.classList.contains('popup')) {
            popupCall.classList.remove('active');
            removeScroll(false, popupCall);
        }
    });*/

    clsPopup(popupArr, clsBtn);

    openPopup(callBtn, popupCall);
    openPopup(signUpBtn, popupSign);
    openPopup(playBtn, popupVideo);

};