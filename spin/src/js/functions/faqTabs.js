module.exports = (wrap) => {
    /*
    *
    ************ Variables
    *
    * */
    const arrTabs = wrap.querySelectorAll('.c_item');
    const arrInfo = wrap.querySelectorAll('.faq_a__items');
    const arrItem = wrap.querySelectorAll('.faq_a__items > .a_item');
    const arrItemTitle = wrap.querySelectorAll('.faq_a__items > .a_item > .a_item__title');
    /*slider wrap overflow*/
    const itemWrap = document.querySelector('.faq_c__items');
    /*slider line*/
    const itemLine = document.querySelector('.c_item_list');
    /*slider items*/
    const items = itemLine.querySelectorAll('.c_item');
    /*controls*/
    const btnRight = document.querySelector('.faq_more_next');
    const btnLeft = document.querySelector('.faq_more_prev');
    /*offset*/
    let widthArray = [0], offset = -26, step = 1, ostatok = 0;
    const getHeight = require('./getHeight');
    let heightWrap = 0, heightElem = {}, classItem;


    function findItem(arrClick, arrSet) {
        for (let p = 0; p < arrClick.length; p++) {
            arrClick[p].addEventListener('click', function (evt) {
                evt.preventDefault();
                removeClass(arrClick);
                arrClick[p].classList.add('active');
                classItem = this.getAttribute('data-class');
                for (let i = 0; i < arrSet.length; i++) {
                    if (arrSet[i].getAttribute('data-class') === classItem) {
                        removeClass(arrSet);
                        arrSet[i].classList.add('active');
                    }
                }
            })
        }
    }

    findItem(arrTabs, arrInfo);


    function addActive(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.add('active');
        }
    }


    function removeClass(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('active');
        }
    }


    function close(elem, maxHeight) {
        let step = maxHeight;
        let speed = 3;
        requestAnimationFrame(function close() {
            speed += speed / 6;
            step -= speed;
            elem.style.height = `${step}px`;
            if (step >= maxHeight) {
                requestAnimationFrame(close);
            } else {
                elem.style.height = `${maxHeight}`;
            }
        });
    }

    function open(elem, maxHeight) {
        let step = 50;
        let speed = 3;

        requestAnimationFrame(function open() {
            speed += speed / 6;
            step += speed;
            elem.style.height = `${step}px`;
            if (step <= maxHeight) {
                requestAnimationFrame(open);
            } else {
                elem.style.height = 'auto';
            }
        });
    }

    for (let i = 0; i < arrItem.length; i++) {
        heightElem[i] = getHeight(arrItemTitle[i]);
        arrItem[i].style.height = `${heightElem[i]}px`;
        arrItem[i].addEventListener('click', () => {

            if (arrItem[i].classList.toggle('active')) {
                heightWrap = getHeight(arrItem[i]);
                open(arrItem[i], heightWrap);
            } else {
                heightWrap = getHeight(arrItemTitle[i]);
                close(arrItem[i], heightWrap);
            }
        });

    }


    arrTabs[0].classList.add('active');
    arrInfo[0].classList.add('active');


    for (let i = 0; i < items.length; i++) {
        widthArray.push(Math.floor(items[i].offsetWidth));
    }

    function moveRight() {
        ostatok = itemLine.offsetWidth - itemWrap.offsetWidth - (offset + widthArray[step]);
        if (ostatok >= 0) {
            offset = offset + widthArray[step] + 25;
            itemLine.style.marginLeft = `${-offset}px`;
            step++;
        } else {
            itemLine.style.marginLeft = -(itemLine.offsetWidth - itemWrap.offsetWidth + 25) + 'px';
            btnRight.classList.remove('active');
        }

        if (offset > 10) {
            btnLeft.classList.add('active');
        } else {
            btnLeft.classList.remove('active');
        }
        if (step >= items.length) {
            step = 0;
            offset = -56;
        }
    }

    function moveLeft() {
        offset = 0;
        step = 1;
        ostatok = 0;
        itemLine.style.marginLeft = `${offset}px`;
        btnLeft.classList.remove('active');
        btnRight.classList.add('active');
        offset = -26;
    }

    btnRight.addEventListener('click', function (evt) {
        evt.preventDefault();
        moveRight();
    });

    btnLeft.addEventListener('click', function (evt) {
        evt.preventDefault();
        moveLeft();
    });


    btnVisible();

    function btnVisible() {
        if (itemLine.clientWidth > itemWrap.clientWidth) {
            btnRight.classList.add('active');
        } else {
            btnRight.classList.remove('active');
        }
    }
};