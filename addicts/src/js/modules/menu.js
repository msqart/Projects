module.exports = (header) => {
    /*nav*/
    const btnNav = header.querySelector('.burger_menu');
    const clsNav = document.querySelector('.nav_cls');
    const navList = document.querySelector('.header_nav');
    const navArrElem = navList.querySelectorAll('.header_nav a');
    const scrollFunc = require('./functions/scrollToBlock');
    const objBlock = {};
    let stopScroll = true, yakScroll = true;

    btnNav.addEventListener('click', function () {
        this.classList.toggle('active');
        navList.classList.toggle('active');
        clsNav.classList.add('active');
    });
    clsNav.addEventListener('click', function () {
        navList.classList.remove('active');
        clsNav.classList.remove('active');
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
            clsNav.classList.remove('active');
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