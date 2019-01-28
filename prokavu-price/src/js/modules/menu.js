module.exports = (nav, burger, header) => {
    burger.addEventListener('click', function (evt) {
        evt.preventDefault();
        nav.classList.toggle('active');
        header.classList.toggle('active');
        this.classList.toggle('active');
    });

    document.addEventListener('scroll', (evt) => {
        if (window.scrollY > 0) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    });

    const topSection = document.querySelector('.top_section');
    const nextElem = topSection.nextElementSibling;

    const nextElemTop = nextElem.offsetTop - 50;

    document.addEventListener('scroll', (evt) => {
        if (document.documentElement.scrollTop > nextElemTop) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    });



    const navList = header.querySelector('.nav');
    const navArrElem = header.querySelectorAll('.nav a');
    const scrollFunc = require('./scrollToBlock');
    const objBlock = {};
    let stopScroll = true, yakScroll = true, headerHeight = header.clientHeight;


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

        const urlToScroll = navArrElem[i].getAttribute('data-name');
        objBlock[`${urlToScroll}`] = {
            linkBlock: document.getElementById(`${urlToScroll}`),
            linkNavLi: navArrElem[i].parentElement,
            counter: i
        };

        navArrElem[i].addEventListener('click', function (even) {
            even.preventDefault();
            stopScroll = false;

            burger.classList.remove('active');
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