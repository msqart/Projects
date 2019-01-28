module.exports = (popupBlock) => {
    /*
    **** Variables
    */
    const clsBtn = document.querySelectorAll('.popup_cls');
    const openBtn = document.querySelectorAll('.p_feedback');
    const popupInfo = document.querySelector('.popup_info');
    const removeScroll = require('./functions/removeScroll');
    const popupTest = document.querySelector('.popup_test');
    const openTest = document.querySelectorAll('.p_test');
    // const stepTest = document.querySelectorAll('.step');

    /*Обработчик на кнопки для вызова попапа*/
    if (popupBlock !== null) {
        for (let i = 0; i < openBtn.length; i++) {
            openBtn[i].addEventListener('click', (even) => {
                even.preventDefault();
                popupBlock.classList.add('active');
                removeScroll(true, popupBlock);
            })
        }
    }

    if (popupTest !== null) {
        for (let i = 0; i < openTest.length; i++) {
            openTest[i].addEventListener('click', (even) => {
                even.preventDefault();
                popupTest.classList.add('active');
                removeScroll(true, popupTest);
            })
        }
    }

    popupTest.addEventListener('click', (even) => {
        if (even.target.classList.contains('popup_test')) {
            popupTest.classList.remove('active');
            removeScroll(false, popupTest);
        }
    });

    popupBlock.addEventListener('click', (even) => {
        if (even.target.classList.contains('popup')) {
            popupBlock.classList.remove('active');
            removeScroll(false, popupBlock);
        }
    });

    /*Закрытие окна*/
    if (clsBtn.length > 0) {
        for (let i = 0; i < clsBtn.length; i++) {
            clsBtn[i].addEventListener('click', (even) => {
                even.preventDefault();
                if (popupBlock !== null) {
                    popupBlock.classList.remove('active');
                    removeScroll(false, popupBlock);
                }
                if (popupInfo !== null) {
                    popupInfo.classList.remove('active');
                    removeScroll(false, popupInfo);
                }
                if (popupTest !== null) {
                    popupTest.classList.remove('active');
                    removeScroll(false, popupTest);
                }
            })
        }
    }


    document.addEventListener('keydown', (even) => {
        even = even || window.event;
        if (even.keyCode === 27) {
            if (popupBlock !== null) {
                popupBlock.classList.remove('active');
                removeScroll(false, popupBlock);
            }
            if (popupInfo !== null) {
                popupInfo.classList.remove('active');
                removeScroll(false, popupInfo);
            }
            if (popupTest !== null) {
                popupTest.classList.remove('active');
                removeScroll(false, popupTest);
            }
        }
    });

};