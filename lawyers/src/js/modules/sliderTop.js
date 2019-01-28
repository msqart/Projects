module.exports = (wrap) => {
    const arrElem = wrap.querySelectorAll('.index-offer-slider .i-o-s_elem');
    const sliderControl = wrap.querySelector('.bread-slider-buttons');
    const btnLeft = wrap.querySelector('.bread-slider-buttons .slick-prev');
    const btnRight = wrap.querySelector('.bread-slider-buttons .slick-next');
    const sliderValueActive = wrap.querySelector('.bread-slider-buttons  .slick-value_active');
    const sliderValueCount = wrap.querySelector('.bread-slider-buttons  .slick-value_count');
    let count = 0, timeOut = null, timeInterval = null;

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

    function moveSlider(boll) {
        count = lastElem(arrElem, count, boll);
        setActiveElem(arrElem, count)
    }

    function defSlider() {
        timeInterval = setInterval(() => {
            moveSlider(true);
        }, 4500);
    }

    btnLeft.addEventListener('click', () => {
        clearInterval(timeInterval);
        clearTimeout(timeOut);
        moveSlider(false);
        timeOut = setTimeout(() => {
            defSlider();
        }, 4000);
    });
    btnRight.addEventListener('click', () => {
        clearInterval(timeInterval);
        clearTimeout(timeOut);
        moveSlider(true);
        timeOut = setTimeout(() => {
            defSlider();
        }, 4000);
    });

    sliderControl.addEventListener('mouseenter', () => {
        clearInterval(timeInterval);
        clearTimeout(timeOut);
    });

    sliderControl.addEventListener('mouseleave', () => {
        defSlider();
    });

    sliderValueCount.innerHTML = `${arrElem.length}`;
    sliderValueActive.innerHTML = `${count + 1}`;

    defSlider();
};