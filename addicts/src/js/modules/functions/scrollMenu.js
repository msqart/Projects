module.exports = function (header, fixCall) {
    if (window.pageYOffset > 200) {
        header.classList.add('active');
        fixCall.classList.add('active');
    } else {
        header.classList.remove('active');
        fixCall.classList.remove('active');
    }
};
