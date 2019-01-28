module.exports = (elem) => {
    const popupImg = document.querySelector('.popup_img');
    const setImg = document.querySelector('.popup_img_box');
    let imgElem = elem;

    if (imgElem.nodeName !== 'IMG') {
        imgElem = elem.querySelector('img');
    }

    function getSrc(img) {
        let src = img.getAttribute('src');
        return `${src.slice(0, src.lastIndexOf('/'))}/full/${src.slice(src.lastIndexOf('/') + 1)}`;
    }

    let img = document.createElement('img');
    let fullSrc = getSrc(imgElem);
    setImg.innerHTML = '';
    setImg.appendChild(img);

    img.setAttribute('src', `${fullSrc}`);
    img.addEventListener('error', () => {
        img.setAttribute('src', `${imgElem.getAttribute('src')}`);
    });

    popupImg.classList.add('active');
};