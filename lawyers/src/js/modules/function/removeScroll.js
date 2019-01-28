module.exports = (boll, elem) => {

    if (boll) {
        let scrollWidth = window.innerWidth - document.body.clientWidth;
        document.body.style.cssText = `overflow:hidden; padding-right:${scrollWidth}px`;
        if (elem) {
            elem.style.width = `${(elem.clientWidth - scrollWidth)}px`;
        }
    } else {
        document.body.removeAttribute('style');

        if (elem) {
            elem.removeAttribute('style');
        }
    }
};