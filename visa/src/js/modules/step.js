module.exports = (step) => {
    const arrStep = step.querySelectorAll('.step');
    const stepError = step.querySelector('.step_error');
    const btnNext = step.querySelector('.btn_next');
    const complete = step.querySelector('.complete');
    const completeForm = step.querySelector('.complete');
    const popupInfo = document.querySelector('.popup_info');
    const getDataStep = require('./dataStep');
    const encode = require('./functions/encode');
    const hiddenScroll = require('./functions/removeScroll');
    const xhr = require("xhr");
    let url = completeForm.getAttribute('action') || '/site/callback';
    let activeElem = 0, arrLength = arrStep.length, choiceStatus = false, dataSend = null;

    function moveStep(boll) {
        for (let i = 0; i < arrLength; i++) {
            arrStep[i].classList.remove('active');
        }
        if (boll) {
            arrStep[activeElem].classList.add('active');
        }
    }

    function zeroize() {
        step.classList.remove('active');
        hiddenScroll(false, step);
        popupInfo.classList.add('active');
        hiddenScroll(true, popupInfo);
        activeElem = 0;
        moveStep(true);
        complete.classList.remove('active');
        btnNext.classList.remove('hidden');
        dataSend = '';
        setTimeout(() => {
            popupInfo.classList.remove('active');
            hiddenScroll(false, popupInfo);
        }, 3000);
    }

    function ifChoice(activeElem) {
        const arrChoice = arrStep[activeElem].querySelectorAll('.test_elem_data input');
        choiceStatus = false;

        for (let i = 0; i < arrChoice.length; i++) {
            if (arrChoice[i].checked) {
                choiceStatus = true;
                break;
            }
        }
        if (choiceStatus) {
            stepError.classList.remove('active');
        } else {
            stepError.classList.add('active');
        }
    }

    btnNext.addEventListener('click', (even) => {
        even.preventDefault();

        if (arrLength - 1 > activeElem) {
            ifChoice(activeElem);
            if (choiceStatus) {
                activeElem += 1;
                moveStep(true);
            }
        } else {
            complete.classList.add('active');
            btnNext.classList.add('hidden');
            moveStep(false);
            dataSend = getDataStep(arrStep);
        }
    });

    completeForm.addEventListener('submit', (even) => {
        even.preventDefault();

        dataSend = getDataStep(arrStep);
        dataSend = `${encode(completeForm)}${dataSend}`;
        console.log(dataSend);
        xhr({
            method: "POST",
            body: `${dataSend}`,
            uri: `${url}`,
            headers: {
                "Content-Type": "application/json"
            }
        }, function (err, resp, body) {
            if (err) {
                console.log(err)
            }
            zeroize();
        });

    });
};