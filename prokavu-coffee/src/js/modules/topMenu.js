module.exports = (header) => {

    const topSection = document.querySelector('.top_section');
    const nextElem = topSection.nextElementSibling;

    const nextElemTop = nextElem.offsetTop - 50;

    document.addEventListener('scroll', (evt) => {
        if (document.documentElement.scrollTop > nextElemTop) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    })

};