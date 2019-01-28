module.exports = (tabs) => {
    const tabsBtn = tabs.querySelectorAll('.tabs .tab_btn');
    const tabsElem = tabs.querySelectorAll('.tabs_body .content_box');
    const tabsBody = tabs.querySelector('.tabs_body');
    const getHeight = require('./functions/getHeight');
    let startElem = 0, startHeight = 0;

    for (let i = 0; i < tabsElem.length; i++) {
        let heightElem = getHeight(tabsElem[i]);
        tabsBtn[i].addEventListener('click', (even) => {
            even.preventDefault();

            tabsBody.style.height = `${heightElem}px`;

            for (let o = 0; o < tabsElem.length; o++) {
                tabsBtn[o].classList.remove('active');
                tabsElem[o].classList.remove('active');
            }

            tabsBtn[i].classList.add('active');
            tabsElem[i].classList.add('active');
        });
        if (i === startElem) {
            tabsBtn[i].classList.add('active');
            tabsElem[i].classList.add('active');
            startHeight = heightElem;
        }
    }
    tabsBody.classList.add('load');
    tabsBody.style.height = `${startHeight}px`;

};