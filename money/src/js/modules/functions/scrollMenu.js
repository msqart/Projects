module.exports = function (header) {
    if (window.pageYOffset > 100 && document.documentElement.clientWidth > 1360) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};
