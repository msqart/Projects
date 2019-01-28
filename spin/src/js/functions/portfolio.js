module.exports = () => {
    /*
    *
    ************ Variables
    *
    * */
    /*slider wrap overflow*/
    const itemWrap = document.querySelector('.portfolio_c__wrap');
    /*portfolio elem*/
    const portfolioElem = document.querySelectorAll('.portfolio_elem');
    /*slider line*/
    const itemLine = document.querySelector('.p_item_list');
    /*slider items*/
    const items = itemLine.querySelectorAll('.c_item');
    /*controls*/
    const btnRight = document.querySelector('.portfolio_more_next');
    const btnLeft = document.querySelector('.portfolio_more_prev');
    /*offset*/
    let widthArray = [0], offset = -26, step = 1, ostatok = 0, classItem, arrSetInfo = [];

    btnVisible();

    function btnVisible() {
        if (itemLine.clientWidth > itemWrap.clientWidth) {
            btnRight.classList.add('active');
        } else {
            btnRight.classList.remove('active');
        }
    }




    function removeClass(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('active');
        }
    }

    function addClass(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.add('hidden');
        }
    }

    function findItem(arrClick, arrSet) {
        for (let p = 0; p < arrClick.length; p++) {
            arrClick[p].addEventListener('click', function (evt) {
                evt.preventDefault();
                removeClass(arrClick);
                arrClick[p].classList.add('active');
                classItem = this.getAttribute('data-class');
                arrSetInfo = [];
                for (let i = 0; i < arrSet.length; i++) {
                    if (arrSet[i].getAttribute('data-class') === classItem) {
                        arrSetInfo.push(arrSet[i]);
                    }
                    removeClass(arrSet);
                    addClass(arrSet);
                }
                arrSetInfo.forEach(function (elem) {
                    elem.classList.add('active');
                })
            })
        }
    }

    findItem(items, portfolioElem);


    for (let i = 0; i < items.length; i++) {
        widthArray.push(Math.floor(items[i].offsetWidth));
    }

    function moveRight() {
        ostatok = itemLine.offsetWidth - itemWrap.offsetWidth - (offset + widthArray[step]);
        if (ostatok >= 0) {
            offset = offset + widthArray[step] + 13;
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
        offset = -13;
    }

    btnRight.addEventListener('click', function (evt) {
        evt.preventDefault();
        moveRight();
    });

    btnLeft.addEventListener('click', function (evt) {
        evt.preventDefault();
        moveLeft();
    });


};