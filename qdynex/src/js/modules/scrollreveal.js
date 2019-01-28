module.exports = () => {
    const ScrollReveal = require('scrollreveal').default;

    const loadActive = {
        distance: '100px',
        origin: 'top',
        viewFactor: 0.15,
        opacity: 0,
        duration: 1200,
        interval: 400,
        delay: 100
    };
    const loadActiveRight = {
        distance: '100px',
        origin: 'right',
        viewFactor: 0.15,
        opacity: 0,
        duration: 1200,
        interval: 400,
        delay: 600
    };
    const loadActiveLeft = {
        distance: '100px',
        origin: 'left',
        viewFactor: 0.15,
        opacity: 0,
        duration: 1200,
        interval: 400,
        delay: 600
    };

    const loadActiveReset = {
        distance: '100px',
        origin: 'top',
        viewFactor: 0.15,
        opacity: 0,
        duration: 1200,
        interval: 400,
        reset: true
    };
    ScrollReveal().reveal('.load_active', loadActive);
    ScrollReveal().reveal('.load_active_reset', loadActiveReset);
    ScrollReveal().reveal('.load_active_right', loadActiveRight);
    ScrollReveal().reveal('.load_active_left', loadActiveLeft);

};