module.exports = (arr, int) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove('active');
    }
    arr[int].classList.add('active');
};