module.exports = (arr) => {
    const xhr = new (require('xhr-promise'))();
    const encode = require('./functions/encode');
    const hiddenScroll = require('./functions/hiddenScroll');
    const popupInfo = document.querySelector('.popup_info');
    const popup = document.querySelector('.popup_feedback');

    for (let i = 0; i < arr.length; i++) {

        arr[i].addEventListener('submit', (even) => {
            even.preventDefault();

            popup.classList.remove('active');
            hiddenScroll(false, popupInfo);

            popupInfo.classList.add('active');
            hiddenScroll(true, popupInfo);

            let dataForm = encode(arr[i]);
            let url = '/';
            console.log(dataForm);

            xhr.send({
                method: 'POST',
                url: `${url}`,
                data: `${dataForm}`
            })
                .then(function (results) {
                    console.log(results);
                    setTimeout(() => {
                        popupInfo.classList.remove('active');
                        popup.classList.remove('active');
                        hiddenScroll(false, popupInfo);
                        hiddenScroll(false, popup);
                    }, 3500);

                    if (results.status !== 200) {
                        throw new Error('request failed');
                    }
                })
                .catch(function (e) {
                    console.error(e, 'XHR error');
                });

        });
    }

};