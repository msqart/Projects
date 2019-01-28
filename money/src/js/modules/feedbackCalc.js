module.exports = (calc) => {
    const btnGetPopup = calc.querySelector('.get_popup_calc');
    const popupCalc = document.querySelector('.credit_info');
    const popupForm = popupCalc.querySelector('form');
    const popupClose = popupCalc.querySelector('.cls_box');
    const cost = popupCalc.querySelector('.credit_info_data .c_i_d_cost');
    const day = popupCalc.querySelector('.credit_info_data .c_i_d_day');
    const payment = popupCalc.querySelector('.credit_info_data .c_i_d_payment');
    const popupInfo = document.querySelector('.popup_send_info');
    const XHR = new (require('xhr-promise'))();
    const encode = require('./functions/encode');
    const removeScroll = require('./functions/removeScroll');
    const url = '/components/form.php';


    function setDataToPopup() {
        cost.innerHTML = calc.querySelector('.calc_box.active .calc_cost_value').textContent;
        day.innerHTML = calc.querySelector('.calc_box.active .calc_day_value').textContent;
        payment.innerHTML = calc.querySelector('.calc_box.active .cost_result_percent').textContent;
    }

    function getDataCalc() {
        return `Сумма кредита=${cost.textContent}&
                Срок кредита=${day.textContent}&
                Ежемесячный платеж=${payment.textContent}`;
    }

    btnGetPopup.addEventListener('click', () => {
        popupCalc.classList.add('active');
        removeScroll(true, popupCalc);
        setDataToPopup();
    });

    popupForm.addEventListener('submit', function (even) {
        even.preventDefault();

        popupCalc.classList.remove('active');
        removeScroll(false, popupCalc);

        popupInfo.classList.add('active');
        removeScroll(true, popupInfo);

        let dataForm = encode(popupForm);

        dataForm = `${dataForm}&${getDataCalc()}`;
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
            removeScroll(false, popupInfo);
        }, 3500);
    });

    popupClose.addEventListener('click', () => {
        popupCalc.classList.remove('active');
        removeScroll(false, popupCalc);
    });

    document.addEventListener('keydown', (even) => {
        even = even || window.event;
        if (even.keyCode === 27) {
            if (popupCalc.classList.contains('active')) {
                popupCalc.classList.remove('active');
                removeScroll(false, popupCalc);
            }
        }
    });

};