module.exports = (gallerySlider, sliderControls) => {

    const sliderElems = gallerySlider.querySelectorAll('.gallery_elem');
    const sliderControlsArr = sliderControls.querySelectorAll('li');


    for (let i = 0; i < sliderControlsArr.length; i++) {
        sliderControlsArr[i].addEventListener('click', function () {
            removeActive(sliderControlsArr);
            removeActive(sliderElems);
            sliderElems[i].classList.add('active');
            this.classList.add('active');
        });
    }

    function removeActive (arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('active');
        }
    }

    sliderControlsArr[0].classList.add('active');
    sliderElems[0].classList.add('active');

};