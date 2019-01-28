module.exports = function (header, burgerMenu) {
    setTimeout(function () {
        let headerHeight = header.offsetHeight;
        let burgerHeight = burgerMenu.offsetHeight;
        let nextNode = header.nextElementSibling;
        if (window.pageYOffset > headerHeight) {
            burgerMenu.classList.add('scroll');
            nextNode.style.marginTop = `${burgerHeight}px`;
        } else if (window.pageYOffset < headerHeight) {
            burgerMenu.classList.remove('scroll');
            nextNode.style.marginTop = "0px";
        }
    }, 500);
};
