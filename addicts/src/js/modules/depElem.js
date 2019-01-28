module.exports = (arr) => {
    let activeElem = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener('mouseenter', () => {
            arr[activeElem].classList.remove('active');
            arr[i].classList.add('active');
            activeElem = i;
        });
    }
    arr[activeElem].classList.add('active');
};