module.exports = (header, boll) => {
    if (boll) {
        header.classList.add('header_scroll');
    } else {
        header.classList.remove('header_scroll');
    }
};