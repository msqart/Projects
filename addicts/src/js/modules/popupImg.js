module.exports = (wrap) => {
    const close = wrap.querySelector('.btn_cls');

    close.addEventListener('click', () => {
        wrap.classList.remove('active');
    });

    document.addEventListener('keydown', (even) => {
        even = even || window.event;
        if (even.keyCode === 27 && wrap.classList.contains('active')) {
            wrap.classList.remove('active');
        }
    });
};