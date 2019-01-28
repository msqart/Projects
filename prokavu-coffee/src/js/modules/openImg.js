module.exports = (gallerySlider) => {

    const popupImg = document.querySelector('.popup_img');
    const clsBtn = popupImg.querySelectorAll('.cls_btn');
    const imgArr = gallerySlider.querySelectorAll('.gallery_elem > div > img');
    const hiddenScroll = require('./functions/hiddenScroll');
    let imgSrc, img, fullImgSrc;


    for (let i = 0; i < clsBtn.length; i++) {
        clsBtn[i].addEventListener('click', (evt) => {
            clsImg();
            hiddenScroll(false, popupImg);
        });
    }


    document.addEventListener('keydown', (even) => {
        even = even || window.event;
        if (even.keyCode === 27 && popupImg.classList.contains('active')) {
            popupImg.classList.remove('active');
            hiddenScroll(false, popupImg);
        }
    });


    function clsImg() {
        popupImg.classList.remove('active');
        popupImg.children[0].removeChild(img);
    }

    function openImg(arr, popup) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].addEventListener('click', function (evt) {
                evt.preventDefault();
                if (evt.target.tagName === 'IMG') {
                    imgSrc = evt.target.getAttribute('src');
                    img = document.createElement('img');
                    fullImgSrc = imgSrc.split('/');
                    fullImgSrc = `${fullImgSrc[0]}/${fullImgSrc[1]}/full/${fullImgSrc[2]}`;
                    img.addEventListener('error', (evt) => {
                        img.src = imgSrc;
                        console.clear();
                    });
                    img.src = fullImgSrc;

                    popup.children[0].appendChild(img);
                    popup.classList.add('active');
                    hiddenScroll(true, popupImg);
                }

            })
        }
    }

    openImg(imgArr, popupImg);


};