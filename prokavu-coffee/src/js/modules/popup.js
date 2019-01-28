module.exports = (popup) => {
    const btn = document.querySelectorAll('.p_feedback');
    const popupFeadback = document.querySelector('.popup_feedback');
    const clsPopup = document.querySelectorAll('.popup_cls');
    const hiddenScroll = require('./functions/hiddenScroll');

    for (let i = 0; i < clsPopup.length; i++) {
        clsPopup[i].addEventListener('click', (evt) => {
            closePopup(popup);
        });
    }

    btn.forEach(function (elem) {
        elem.addEventListener('click', function (evt) {
            evt.preventDefault();
            popupFeadback.classList.add('active');
            hiddenScroll(true, popupFeadback);
        })
    });

    document.addEventListener('keydown', function (evt) {
       evt = evt || window.event;
       if (evt.keyCode === 27) {
           popupFeadback.classList.remove('active');
           hiddenScroll(false, popupFeadback);
       }
    });

    document.addEventListener('click', function (evt) {
       if (evt.target.classList.contains('popup_feedback')) {
           popupFeadback.classList.remove('active');
           hiddenScroll(false, popupFeadback);
       }
    });

    function closePopup (popup) {
        for (let i = 0; i < popup.length; i++) {
            popup[i].classList.remove('active');
            hiddenScroll(false, popup[i]);
        }
    }
};