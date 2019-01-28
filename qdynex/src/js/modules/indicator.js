module.exports = (indicator) => {
    const arrElemIndicator = indicator.querySelectorAll('.indicator_list .indicator_elem');
    const imgContent = indicator.querySelector('.indicator_detail_img img');
    const aboutContent = indicator.querySelector('.i_d_c_about');
    const textContent = indicator.querySelector('.indicator_detail_text');
    const indicatorDetail = indicator.querySelector('.indicator_detail');
    const setActive = require('./functions/setActive');
    let timeout = null, startCount = 0;

    function getContent(elem) {
        return {
            img: elem.querySelector('.i_e_d_img').getAttribute('src'),
            about: elem.querySelector('.i_e_d_about').innerHTML,
            text: elem.querySelector('.i_e_d_text').innerHTML
        }
    }

    function setContent(obj) {
        imgContent.setAttribute('src', `${obj['img'] || ''}`);
        aboutContent.innerHTML = `${obj['about'] || ''}`;
        textContent.innerHTML = `${obj['text'] || ''}`;
    }

    function changeableContent(elem, int) {
        indicatorDetail.classList.add('change');
        timeout = setTimeout(() => {
            setContent(getContent(elem));
            indicatorDetail.classList.remove('change');
        }, 500);
        setActive(arrElemIndicator, int);
    }

    for (let i = 0; i < arrElemIndicator.length; i++) {
        arrElemIndicator[i].addEventListener('click', () => {
            if (startCount !== i) {
                clearTimeout(timeout);
                changeableContent(arrElemIndicator[i], i);
                startCount = i;
            }
        });
    }

    changeableContent(arrElemIndicator[startCount], startCount);
};