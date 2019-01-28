module.exports = function (header) {
    setTimeout(function () {
        let headerHeight = header.offsetHeight;
        let nextNode = header.nextElementSibling;
        if (window.pageYOffset > 170) {
            header.classList.add('scroll');
            nextNode.style.marginTop = "170px";
        } else if (window.pageYOffset < 170) {
            header.classList.remove('scroll');
            nextNode.style.marginTop = "0px";
        }
    }, 500);
};
