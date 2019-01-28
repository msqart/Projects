module.exports = function (header) {
   /* let nextNode = header.nextElementSibling;
    let headerHeight = header.offsetHeight;
    if (window.pageYOffset > 0) {
        nextNode.style.marginTop = `${headerHeight / 3}px`;
    } else {
        nextNode.style.marginTop = '0px';
    }*/
    if (window.pageYOffset > 200) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};
