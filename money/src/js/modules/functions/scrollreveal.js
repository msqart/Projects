module.exports = () => {
    const ScrollReveal = require('scrollreveal').default;

    const loadActive = {
        distance: '300px',
        origin: 'bottom',
        viewFactor: 0.15,
        opacity: 0,
        duration: 1500
    };

    ScrollReveal().reveal('.load_active', loadActive);
    /*Для родителя*/

};