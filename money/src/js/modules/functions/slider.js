module.exports = () => {

    /*
    *
    * **************** Variables
    *
    * */

    const arrSlideElem = document.querySelectorAll('.slider_elem');
    const btnPrev = document.querySelector('.btn_prev');
    const btnNext = document.querySelector('.btn_next');
    let count = 0, yak = true;

    function lastElem(arr, int, boll) {
        if (boll) {
            return (arr[int + 1]) ? int + 1 : 0;
        } else {
            return (arr[int - 1]) ? int - 1 : arr.length - 1;
        }
    }

    function moveSlider(boll) {
        if (yak) {
            count = lastElem(arrSlideElem, count, boll);
            arrSlideElem[count].classList.remove('active');
            arrSlideElem[count].classList.add('active');
            for (let i = 0; i < arrSlideElem.length; i++) {
                arrSlideElem[i].classList.remove('active');
            }
            arrSlideElem[count].classList.add('active');
        }
    }


    btnPrev.addEventListener('click', (even) => {
        even.preventDefault();
        moveSlider(false);
    });
    btnNext.addEventListener('click', (even) => {
        even.preventDefault();
        moveSlider(true);
    });

    arrSlideElem[0].classList.add('active');


};