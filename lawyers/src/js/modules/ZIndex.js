module.exports = (arr) => {
    let int = arr.length;
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.zIndex = `${int--}`;

    }
};