module.exports = (nav) => {

    const navArr = nav.querySelectorAll('a');
    const sectionArr = document.querySelectorAll('section');
    const divArr = document.querySelectorAll('div');
    const footerArr = document.querySelectorAll('footer');
    const classArr = [...sectionArr, ...divArr, ...footerArr];

    navArr.forEach(function (elem) {
        elem.addEventListener('click', function (evt) {
            evt.preventDefault();
            let el = this.dataset.name;
            findBlock(classArr, el);
        })
    });
    let blockPos;
    let timer;
    function findBlock(arr, elem) {
        for (let i = 0; i < arr.length; i++) {
            if (elem === arr[i].className) {
                blockPos = arr[i].offsetTop - 150;
                /*goTo();*/
            }
        }
    }
    
    function goTo() {
        if (blockPos > 0) {
            window.scrollTo(0, blockPos);
            blockPos = blockPos + 100;
            timer = setTimeout(goTo, 100);
        } else {
            clearTimeout(timer);
            window.scrollTo(0, blockPos);
        }
    }

    function removeActive(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('active');
        }
    }


};