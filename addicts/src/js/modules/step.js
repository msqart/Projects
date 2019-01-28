module.exports = (wrap) => {
    const arrButton = wrap.querySelectorAll('.steps_elem');
    const arrContent = wrap.querySelectorAll('.steps_info__edit_text');
    const getHeight = require('./functions/getHeight');
    let lastActiveCount = 0, activeHeight = 3;

    function setActiveClass(arr, int) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('active');
        }
        arr[int].classList.add('active');
    }

    for (let i = 0; i < arrButton.length; i++) {

        arrButton[i].addEventListener('click', () => {
            if (i !== lastActiveCount) {
                setActiveClass(arrButton, i);
                setActiveClass(arrContent, i);
            }
            lastActiveCount = i;
        });
        if (i === 0) {
            arrContent[i].classList.add('active');
        }
    }


};