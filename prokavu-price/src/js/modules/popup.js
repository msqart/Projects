module.exports = (popup) => {
    const popupFeedback = document.querySelector('.popup_feedback');
    const clsPopup = document.querySelectorAll('.popup_cls');
    const hiddenScroll = require('./functions/hiddenScroll');
    const btnFeedback = document.querySelectorAll('.p_feedback');


    for (let p = 0; p < btnFeedback.length; p++) {
        btnFeedback[p].addEventListener('click', (evt) => {
            evt.preventDefault();
            popupFeedback.classList.add('active');
            hiddenScroll(true, popupFeedback);
        })
    }


    document.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('popup_feedback')) {
            popupFeedback.classList.remove('active');
            hiddenScroll(false, popupFeedback);
        }
    });

    for (let i = 0; i < clsPopup.length; i++) {
        clsPopup[i].addEventListener('click', (evt) => {
            closePopup(popup);
        });
    }

    document.addEventListener('keydown', (even) => {
        even = even || window.event;
        if (even.keyCode === 27) {
            closePopup(popup);
        }
    });

    function closePopup(popup) {
        for (let i = 0; i < popup.length; i++) {
            popup[i].classList.remove('active');
            hiddenScroll(false, popup[i]);
        }
    }
};