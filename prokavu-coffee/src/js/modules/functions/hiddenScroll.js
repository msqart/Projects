module.exports = (boll, elem) => {
    const topSection = document.querySelector('.top_section');


    if (boll) {
        let scrollWidth = window.innerWidth - document.body.clientWidth;
        document.body.style.cssText = `overflow:hidden; padding-right:${(scrollWidth)}px`;
        if (elem) {
            elem.style.width = `calc(100% - ${scrollWidth}px)`;
            topSection.style.width = `calc(100% - ${scrollWidth}px)`;
        }
    } else {
        document.body.removeAttribute('style');
        if (elem) {
            elem.removeAttribute('style');
            topSection.removeAttribute('style');
        }
    }
};