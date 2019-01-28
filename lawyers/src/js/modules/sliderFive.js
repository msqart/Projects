module.exports = (wrap) => {
    const arrElem = wrap.querySelectorAll('.slider_five_elem');
    const wrapSlider = wrap.querySelector('.slider_five_wrap');
    const maxAttribute = wrap.getAttribute('data-count-slider');
    const maxCountElem = +maxAttribute || 5;
    const sliderValueActive = wrap.querySelector('.bread-slider-buttons  .slick-value_active');
    const btnLeft = wrap.querySelector('.bread-slider-buttons .slick-prev');
    const btnRight = wrap.querySelector('.bread-slider-buttons .slick-next');
    const sliderValueCount = wrap.querySelector('.bread-slider-buttons  .slick-value_count');
    let step = 0, count = 0, lengthWrap = Math.ceil(arrElem.length / maxCountElem);
    const getHeight = require('./function/getHeight');

    function lastElem(arr, int, boll) {
        if (boll) {
            return (arr[int + 1]) ? int + 1 : 0;
        } else {
            return (arr[int - 1]) ? int - 1 : arr.length - 1;
        }
    }

    function setActiveElem(arr, countActive) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('active');
        }
        arr[countActive].classList.add('active');
        sliderValueActive.innerHTML = `${count + 1}`;
    }

    function moveSlider(arr, boll) {
        count = lastElem(arr, count, boll);
        setActiveElem(arr, count)
    }

    for (let i = 0; i < lengthWrap; i++) {
        let wrapBlock = document.createElement('div');
        wrapBlock.className = 'slider_five_slide';
        for (let e = step; e < step + maxCountElem; e++) {
            try {
                wrapBlock.appendChild(arrElem[e].cloneNode(true));
                wrapSlider.removeChild(arrElem[e]);
            }
            catch (e) {
                break;
            }
        }
        wrapSlider.appendChild(wrapBlock);
        step += maxCountElem;
    }
    const arrFiveSlide = wrapSlider.querySelectorAll('.slider_five_slide');




    btnLeft.addEventListener('click', () => {
        moveSlider(arrFiveSlide, false);
        const heightSliderBox = getHeight('.partners-box');
        const bgSlider = document.querySelector('.slider_bg');
        if (bgSlider !== null) {
            bgSlider.style.height = `${(heightSliderBox/100) * 60}px`;
        }
    });
    btnRight.addEventListener('click', () => {
        moveSlider(arrFiveSlide, true);
        const heightSliderBox = getHeight('.partners-box');
        const bgSlider = document.querySelector('.slider_bg');
        if (bgSlider !== null) {
            bgSlider.style.height = `${(heightSliderBox/100) * 60}px`;
        }
    });
    arrFiveSlide[0].classList.add('active');

    sliderValueCount.innerHTML = `${arrFiveSlide.length}`;
    sliderValueActive.innerHTML = `${count + 1}`;

    const heightSliderBox = getHeight('.partners-box');
    const bgSlider = document.querySelector('.slider_bg');
    if (bgSlider !== null) {
        bgSlider.style.height = `${(heightSliderBox/100) * 60}px`;
    }

};