module.exports = (gallery, galleryControls) => {

    const galleryLeft = gallery.querySelectorAll('.gallery_elem_left > img');
    const galleryRight = gallery.querySelectorAll('.gallery_elem_right > .elem_right');
    const btnLeft = galleryControls.querySelector('.btn_left');
    const btnRight = galleryControls.querySelector('.btn_right');
    let count = 0, yak = true;

    btnLeft.addEventListener('click', (evt) => {
        evt.preventDefault();
        moveSlider(false);
    });

    btnRight.addEventListener('click', (evt) => {
        evt.preventDefault();
        moveSlider(true);
    });


    function lastElem(arr, int, boll) {
        if (boll) {
            return (arr[int + 1]) ? int + 1 : 0;
        } else {
            return (arr[int - 1]) ? int - 1 : arr.length - 1;
        }
    }

    function moveSlider(boll) {
        if (yak) {
            count = lastElem(galleryLeft, count, boll);
            for (let i = 0; i < galleryLeft.length; i++) {
                galleryLeft[i].classList.remove('active');
                galleryRight[0].children[i].classList.remove('active');
                galleryRight[1].children[i].classList.remove('active');
            }
            galleryLeft[count].classList.add('active');
            galleryRight[0].children[count].classList.add('active');
            galleryRight[1].children[count].classList.add('active');

        }
    }

};