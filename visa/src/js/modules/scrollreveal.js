module.exports = () => {
    const ScrollReveal = require('scrollreveal').default;

    const loadActive = {
        distance: '300px',
        origin: 'bottom',
        viewFactor: 0.15,
        opacity: 0,
        duration: 700
    };
    const loadImg = {
        distance: '300px',
        origin: 'right',
        viewFactor: 0.15,
        opacity: 0,
        duration: 3500
    };

    ScrollReveal().reveal('.load_active', loadActive);
    /*Для родителя*/
    ScrollReveal().reveal('.load_img', loadImg);
    /*Для картинок*/

    /*Для иконок*/

    const options = {
        delay: 0,
        distance: '5%',
        duration: 0,
        scale: 1,
        opacity: null,
        rotate: {
            x: 0,
            y: 0,
            z: 0
        },
        beforeReveal(elem) {
            elem.classList.add('active');
        },
        afterReveal(elem) {
            elem.classList.add('active');
        }
    };

    ScrollReveal().reveal('.box_el', options);
    ScrollReveal().reveal('.visible_scroll', options);

};