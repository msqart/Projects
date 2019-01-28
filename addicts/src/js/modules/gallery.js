module.exports = (gallery) => {
    const rightBtn = gallery.querySelector('.slider_btn .slider_btn__bg');
    const galleryList = gallery.querySelector('.gallery_list');
    const firstElem = galleryList.querySelectorAll('.elem');
    const fullImg = require('./functions/fullImg');
    let count = 0, countMove = 0, yak = 0;

    function countElem() {
        yak++;
        return count = +(galleryList.clientWidth / firstElem[0].clientWidth).toFixed(0);
    }

    function degMoverCount() {
        countElem();
        if (count < yak + 2) {
            countMove = yak = 0;
        } else {
            countMove += (galleryList.clientWidth / count);
        }
        return -countMove;
    }

    function moveSlider() {
        galleryList.style.transform = `translateX(${degMoverCount()}px)`;
    }

    for (let i = 0; i < firstElem.length; i++) {
        firstElem[i].addEventListener('click', (even) => {
            even.preventDefault();
            fullImg(firstElem[i]);
        })
    }

    rightBtn.addEventListener('click', () => {
        moveSlider();
    });

};