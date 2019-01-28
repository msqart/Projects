module.exports = (analytics) => {
    const arrElemAnalytics = analytics.querySelectorAll('.analytics_list .analytics_elem');
    const textContent = analytics.querySelector('.analytics_detail .a_d_text');
    const setActive = require('./functions/setActive');
    const openElem = require('./functions/openElem');
    const getHeight = require('./functions/getHeight');
    let timeout = null, timeoutTwo = null, startCount = 0;

    function setData(elem) {
        textContent.innerHTML = elem.querySelector('.analytics_elem_data').innerHTML;
    }

    function changeableContent(elem, int) {
        textContent.classList.add('change');
        textContent.style.height = `${getHeight(textContent)}px`;
        timeoutTwo = setTimeout(() => {
            textContent.style.height = `0`;
        }, 50);
        timeout = setTimeout(() => {
            setData(elem);
            textContent.classList.remove('change');
            openElem(textContent, 200);
        }, 500);
        setActive(arrElemAnalytics, int);
    }

    for (let i = 0; i < arrElemAnalytics.length; i++) {
        arrElemAnalytics[i].addEventListener('click', (even) => {
            even.preventDefault();
            if (startCount !== i) {
                clearTimeout(timeout);
                clearTimeout(timeoutTwo);
                changeableContent(arrElemAnalytics[i], i);
                startCount = i;
            }
        });
    }

    changeableContent(arrElemAnalytics[startCount], startCount);
};