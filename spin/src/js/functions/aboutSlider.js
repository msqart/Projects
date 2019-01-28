module.exports = (wrap) => {

    /*
    *
    ********************* Variables
    *
    * */

    const arrImg = wrap.querySelectorAll('.aboutus .slider_imgbox__active .img_el');
    const arrInfo = wrap.querySelectorAll('.aboutus .slider_info .slider_info__el .info_el');
    const arrControls = wrap.querySelectorAll('.aboutus .min_img__wrap img');
    const sliderRight = wrap.querySelector('.slider_btn .btn_next.aboutus_btn');
    const sliderLeft = wrap.querySelector('.slider_btn .btn_prev.aboutus_btn');
    let count = 0, yak = true, mT = true, mC = true;


    for (let i = 0; i < arrControls.length; i++) {
        arrControls[i].addEventListener('click', function (evt) {
            if (evt.target.tagName === "IMG") {
                removeClass(arrControls);
                removeClass(arrImg);
                removeClass(arrInfo);
                this.classList.add('active');
                arrImg[i].classList.add('active');
                arrInfo[i].classList.add('active');
            }
        })
    }

    function removeClass(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('active');
        }
    }

    function findActive(arr, boll) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].classList.contains('active') && boll) {
                return (arr[i + 1]) ? i + 1 : 0;
            } else if (arr[i].classList.contains('active')) {
                return (arr[i - 1]) ? i - 1 : arr.length - 1;
            }
        }
    }


    /*function lastElem(arr, int, boll) {
        if (boll) {
            return (arr[int + 1]) ? int + 1 : 0;
        } else {
            return (arr[int - 1]) ? int - 1 : arr.length - 1;
        }
    }*/

    function moveSlider(boll) {
        if (yak) {
            /*count = lastElem(arrImg, count, boll);*/
            console.log(count);
            count = findActive(arrControls, boll);
            console.log(count);
            arrImg[count].classList.remove('active');
            for (let i = 0; i < arrImg.length; i++) {
                arrImg[i].classList.remove('active');
            }
            arrImg[count].classList.add('active');
        }
    }

    function moveText(boll) {
        if (mT) {
            /*countText = lastElem(arrInfo, countText, boll);*/
            count = findActive(arrControls, boll);
            for (let i = 0; i < arrInfo.length; i++) {
                arrInfo[i].classList.remove('active');
            }
            arrInfo[count].classList.add('active');
        }
    }

    function moveControls(boll) {
        if (mC) {
            /*countControls = lastElem(arrControls, countControls, boll);*/
            count = findActive(arrControls, boll);
            for (let i = 0; i < arrControls.length; i++) {
                arrControls[i].classList.remove('active');
            }
            arrControls[count].classList.add('active');
        }
    }

    sliderRight.addEventListener('click', (even) => {
        even.preventDefault();
        moveSlider(true);
        moveText(true);
        moveControls(true);
    });
    sliderLeft.addEventListener('click', (even) => {
        even.preventDefault();
        moveSlider(false);
        moveText(false);
        moveControls(false);
    });
    arrImg[0].classList.add('active');
    arrInfo[0].classList.add('active');
    arrControls[0].classList.add('active');

};