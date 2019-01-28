module.exports = (header) => {
    /*nav*/
    const btnNav = header.querySelector('.burger_menu');

    const navList = header.querySelector('.nav');
    const navArrElem = header.querySelectorAll('.nav a');
    const scrollFunc = require('./functions/scrollToBlock');
    const objBlock = {};
    let stopScroll = true, yakScroll = true, headerHeight = header.clientHeight;

    btnNav.addEventListener('click', function () {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });

    function setClass(int, arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('active');
        }
        arr[int].classList.add('active');
    }

    function whatScroll() {
        for (let elem in objBlock) {
            if (objBlock.hasOwnProperty(elem)) {
                try {
                    if (objBlock[`${elem}`]['linkBlock'].getBoundingClientRect().top < window.innerHeight / 2 &&
                        objBlock[`${elem}`]['linkBlock'].getBoundingClientRect().bottom > window.innerHeight / 2) {
                        setClass(objBlock[`${elem}`]['counter'], navArrElem);
                    }
                } catch (e) {

                }
            }
        }
    }

    for (let i = 0; i < navArrElem.length; i++) {

        const urlToScroll = navArrElem[i].getAttribute('data-block');
        objBlock[`${urlToScroll}`] = {
            linkBlock: document.getElementById(`${urlToScroll}`),
            linkNavLi: navArrElem[i].parentElement,
            counter: i
        };

        navArrElem[i].addEventListener('click', function (even) {
            even.preventDefault();
            stopScroll = false;

            btnNav.classList.remove('active');
            navList.classList.remove('active');
            setClass(i, navArrElem);

            if (objBlock[`${urlToScroll}`]['linkBlock'] !== null) {
                scrollFunc(objBlock[`${urlToScroll}`]['linkBlock'], header).then(() => {
                    stopScroll = true;
                });
            }
        });
    }
    whatScroll();
    window.addEventListener('scroll', () => {
        if (yakScroll && stopScroll) {
            yakScroll = false;
            whatScroll();
            yakScroll = true;
        }
    });

};