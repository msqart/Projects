module.exports = (gallery) => {

    const clsBtn = document.querySelectorAll('.cls_btn');
    const popupImg = document.querySelector('.popup_img');
    const leftImg = gallery.querySelectorAll('.gallery_elem_left > img');
    const rightImg = gallery.querySelectorAll('.gallery_elem_right > .elem_right > img');
    const hiddenScroll = require('./functions/hiddenScroll');
    const imgArr = [...leftImg, ...rightImg];
    let imgSrc, img, fullImgSrc;

    document.addEventListener('keydown', (even) => {
        even = even || window.event;
        if (even.keyCode === 27) {
            clsImg();
        }
    });

    for (let i = 0; i < clsBtn.length; i++) {
        clsBtn[i].addEventListener('click', (evt) => {
            clsImg();
        });
    }

    function clsImg() {
        popupImg.classList.remove('active');
        popupImg.children[0].removeChild(img);
        hiddenScroll(false, popupImg);
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
                    hiddenScroll(true, popup);
                }

            })
        }
    }

    openImg(imgArr, popupImg);


};