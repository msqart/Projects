module.exports = () => {
    const ScrollReveal = require('scrollreveal').default;

    const loadActive = {
        distance: '100px',
        origin: 'top',
        viewFactor: 0.15,
        opacity: 0,
        duration: 1200,
        interval: 400
    };

    ScrollReveal().reveal('.load_active', loadActive);

};