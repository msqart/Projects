module.exports = (arrForm) => {

    const XHR = new (require('xhr-promise'))();
    const encode = require('./functions/encode');
    const hiddenScroll = require('./functions/removeScroll');
    const popupInfo = document.querySelector('.popup_send_info');
    const popup = document.querySelector('.popup_send_data');

    for (let i = 0; i < arrForm.length; i++) {
        arrForm[i].addEventListener('submit', function (even) {
            even.preventDefault();

            popup.classList.remove('active');
            hiddenScroll(false, popup);

            popupInfo.classList.add('active');
            hiddenScroll(true, popupInfo);

            let dataForm = encode(arrForm[i]);
            let url = '/components/form.php';
            console.log(dataForm);

            XHR.send({
                method: 'POST',
                url: `${url}`,
                data: `${dataForm}`
            })
                .then(function (results) {
                    if (results.status !== 200) {
                        throw new Error('request failed');
                    }
                    console.log(results.status);
                })
                .catch(function (e) {
                    console.error('XHR error', e);
                });

            setTimeout(() => {
                popupInfo.classList.remove('active');
                hiddenScroll(false, popupInfo);
            }, 3500);
        });
    }


};