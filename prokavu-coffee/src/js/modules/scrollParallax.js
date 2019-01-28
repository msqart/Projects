module.exports = (arr) => {
    let scrollX, scrollY;

    document.addEventListener('scroll', (evt) => {
        arr.forEach(function (elem) {
            scrollY = document.documentElement.scrollTop / 27;
            elem.style.transform = `translate(${-scrollX}%, ${scrollY}%)`;
        });
    });

    document.addEventListener('mouseover', (evt) => {
        arr.forEach(function (elem) {
            scrollX = evt.clientX / 22;
            scrollY = evt.clientY / 22;
            elem.style.transform = `translate(${-scrollX}%, ${scrollY}%)`;
        });
    });

};