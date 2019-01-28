module.exports = (wrap) => {

    const imgWrap = wrap.querySelector('.c_m_s_image');
    const imgArr = imgWrap.querySelectorAll('img');
    const textWrap = wrap.querySelector('.c_m_s_text');
    const textArr = textWrap.querySelectorAll('.c_m_s_t_elem');
    const buttonWrap = imgWrap.querySelector('.coffee_controls');
    const btnLeft = buttonWrap.querySelector('.btn_left');
    const btnRight = buttonWrap.querySelector('.btn_right');
    let count = 0, yak = true;

    function lastElem (arr, int, yak) {
        if (yak) {
            return (arr[int + 1]) ? int + 1 : 0
        } else {
            return (arr[int - 1]) ? int - 1 : arr.length - 1
        }
    }

    function move (yak) {
        count = lastElem(imgArr, count, yak);
        removeActive(imgArr);
        removeActive(textArr);
        imgArr[count].classList.add('active');
        textArr[count].classList.add('active');
    }

    btnLeft.addEventListener('click', (evt) => {
        evt.preventDefault();
        move(false);
    });

    btnRight.addEventListener('click', (evt) => {
        evt.preventDefault();
        move(true);
    });


    function removeActive (arr) {
        arr.forEach(function (elem) {
            elem.classList.remove('active');
        })
    }

    imgArr[0].classList.add('active');
    textArr[0].classList.add('active');
};