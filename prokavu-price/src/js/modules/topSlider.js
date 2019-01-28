module.exports = (price, slideTopImg) => {

    const priceArr = document.querySelectorAll('.weight > p');
    const priceBox = document.querySelectorAll('.s_s_a_text .price > span');
    const infoArr = document.querySelectorAll('.s_s_a_text');
    const imgArr = slideTopImg.querySelectorAll('img');
    const sliderCount = document.querySelector('.a_all');
    const controlsWrap = document.querySelector('.s_s_controls');
    const btnLeft = controlsWrap.querySelector('.btn_left');
    const btnRight = controlsWrap.querySelector('.btn_right');
    const currentSlide = document.querySelector('.a_slide');
    let countSlide, count = 0, yak = true, curInfoArr;


    changeCount(imgArr);
    findPrice(priceArr);

    btnLeft.addEventListener('click', (evt) => {
        evt.preventDefault();
        moveSlider(false);
    });

    btnRight.addEventListener('click', (evt) => {
        evt.preventDefault();
        moveSlider(true);
    });

    document.addEventListener('keydown', (evt) => {
        evt = (evt) ? evt : window.event;
        if (evt.keyCode === 37) {
            evt.preventDefault();
            moveSlider(false);
        }
        if (evt.keyCode === 39) {
            evt.preventDefault();
            moveSlider(true);
        }
    });

    function lastElem(arr, int, boll) {
        if (boll) {
            return (arr[int + 1]) ? int + 1 : 0;
        } else {
            return (arr[int - 1]) ? int - 1 : arr.length - 1;
        }
    }

    function changeCurrent(count) {
        currentSlide.innerHTML = count + 1;
    }

    function moveSlider(boll) {
        if (yak) {
            count = lastElem(infoArr, count, boll);
            for (let i = 0; i < infoArr.length; i++) {
                infoArr[i].classList.remove('active');
                imgArr[i].classList.remove('active');
            }
            changeCurrent(count);
            infoArr[count].classList.add('active');
            imgArr[count].classList.add('active');
        }
    }

    function findPrice(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].addEventListener('click', function (evt) {
                evt.preventDefault();
                removeActive(arr);
                arr[i].classList.add('active');
                for (let l = 0; l < infoArr.length; l++) {
                    if (infoArr[l].classList.contains('active')) {
                        curInfoArr = l;
                        priceBox[curInfoArr].innerHTML = arr[i].dataset.price;
                    }
                }
            })
        }
    }

    function removeActive(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('active');
        }
    }

    function changeCount(arr) {
        countSlide = arr.length;
        sliderCount.innerHTML = countSlide;
    }


    infoArr[0].classList.add('active');
    imgArr[0].classList.add('active');
};