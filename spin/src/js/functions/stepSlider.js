module.exports = (wrap) => {

    const arrElem = wrap.querySelectorAll('.slider_box_list .slider_item');
    const sliderLeft = wrap.querySelector('.slider_btn .btn_prev');
    const sliderRight = wrap.querySelector('.slider_btn .btn_next');
    const activeImg = wrap.querySelector('.slider_box_active .slider_img img');
    const activeContent = wrap.querySelector('.slider_box_active .slider_info');
    const activeWrap = wrap.querySelector('.slider_box_active');
    let count = 0, yak = true, countNext = 1;

    function lastElem(arr, int, boll) {
        if (boll) {
            return (arr[int + 1]) ? int + 1 : 0;
        } else {
            return (arr[int - 1]) ? int - 1 : arr.length - 1;
        }
    }

    function getDataSlide(int) {
        activeContent.innerHTML = arrElem[int].querySelector('.slider_info').innerHTML;
        activeImg.setAttribute('src', `${arrElem[int].querySelector('.slider_img img').getAttribute('src')}`);
    }

    function moveSlider(boll) {
        if (yak) {
            count = lastElem(arrElem, count, boll);
            countNext = lastElem(arrElem, countNext, boll);
            activeWrap.classList.remove('active');
            setTimeout(() => {
                getDataSlide(count);
                activeWrap.classList.add('active');
            }, 500);
            for (let i = 0; i < arrElem.length; i++) {
                arrElem[i].classList.remove('active');
            }
            arrElem[countNext].classList.add('active');
        }
    }

    sliderRight.addEventListener('click', (even) => {
        even.preventDefault();
        moveSlider(true);
    });
    sliderLeft.addEventListener('click', (even) => {
        even.preventDefault();
        moveSlider(false);
    });

    arrElem[1].classList.add('active');
    activeWrap.classList.add('active');
};