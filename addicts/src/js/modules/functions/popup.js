module.exports = () => {

    /*
    *
    ***************** Variables
    *
    * */


    const popupCls = document.querySelectorAll('.btn_cls');
    const btnPopup = document.querySelectorAll('.p_fb');
    const callPopup = document.querySelector('.popup');
    const imgPopup = document.querySelector('.popup_img');
    const successPopup = document.querySelector('.popup_success');
    const removeScroll = require('./removeScroll');


    function openPopup(arr, elem) {
        for (let o = 0; o < arr.length; o++) {
            arr[o].addEventListener('click', (even) => {
                even.preventDefault();
                elem.classList.add('active');
                removeScroll(true, elem);
            });
        }
    }

    function closePopup(arr, elem) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].addEventListener('click', (even) => {
                even.preventDefault();
                elem.classList.remove('active');
                removeScroll(false, elem);
            });
        }
    }

    function closeContainsPopup(popup, elem) {
        elem.addEventListener('click', (even) => {
            if (even.target.classList.contains(popup)) {
                elem.classList.remove('active');
                removeScroll(false, elem);
            }
        });
    }


    document.addEventListener('keydown', (even) => {
        even = even || window.event;
        if (even.keyCode === 27) {
            if (callPopup !== null) {
                callPopup.classList.remove('active');
                removeScroll(false, callPopup);
            }
        }
    });


    /*Закрытие при нажатии вне окна*/
    closeContainsPopup('popup', callPopup);

    /*Закрытие по кнопке*/
    closePopup(popupCls, callPopup);
    closePopup(popupCls, successPopup);
    closePopup(popupCls, imgPopup);

    /*Открытие по кнопке*/
    openPopup(btnPopup, callPopup);

};