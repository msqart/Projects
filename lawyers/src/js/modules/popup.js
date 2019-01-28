module.exports = () => {
    /*
    **** Variables
    */
    /*Ищем окно с попапом*/
    const popupBlock = document.querySelector('.popup');
    /*Идем кнопку закрыть*/
    const clsBtn = document.querySelector('.popup_cls');
    /*Ищем все кнопки для вызова попапа*/
    const openBtn = document.querySelectorAll('.p_feedback');
    /*remove scroll popup*/
    const removeScroll = require('./function/removeScroll');

    /*Обработчик на кнопки для вызова попапа*/
    if (popupBlock !== null) {
        for (let i = 0; i < openBtn.length; i++) {
            openBtn[i].addEventListener('click', (even) => {
                popupBlock.classList.add('p_active');
                even.preventDefault();
                removeScroll(true, popupBlock);
            })
        }

    }

    /*Закрытие окна*/
    if (clsBtn !== null) {
        clsBtn.addEventListener('click', (even) => {
            popupBlock.classList.remove('p_active');
            even.preventDefault();
            removeScroll(false, popupBlock);
        })
    }
    if (popupBlock !== null) {
        document.onkeydown = function (e) {
            e = e || window.event;
            if (e.keyCode == 27) {
                const popupBlock = document.querySelector('.popup');
                popupBlock.classList.remove('p_active');
                removeScroll(false, popupBlock);
            }
        };
    }
};