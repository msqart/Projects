module.exports = (arr) => {
    const xhr = require("xhr");
    const encode = require('./functions/encode');
    const hiddenScroll = require('./functions/removeScroll');
    const popupInfo = document.querySelector('.popup_info');
    const popup = document.querySelector('.popup');

    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener('submit', function (even) {
            even.preventDefault();

            popup.classList.remove('active');
            hiddenScroll(false, popupInfo);

            popupInfo.classList.add('active');
            hiddenScroll(true, popupInfo);

            let dataForm = encode(arr[i]);
            let url = arr[i].getAttribute('action') || '/site/callback';

            xhr({
                method: "POST",
                body: `${dataForm}`,
                uri: `${url}`,
                headers: {
                    "Content-Type": "application/json"
                }
            }, function (err, resp, body) {
                setTimeout(() => {
                    popupInfo.classList.remove('active');
                    popup.classList.remove('active');
                    hiddenScroll(false, popupInfo);
                    hiddenScroll(false, popup);
                }, 3500);
            });
        });
    }

};