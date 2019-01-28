module.exports = (header) => {

    const navBtn = header.querySelector('.burger_menu');
    const nav = header.querySelector('.header_main__nav');
    const clsNav = header.querySelector('.nav_cls');

    if (navBtn !== null && nav !== null) {
        navBtn.addEventListener('click', (even) => {
            even.preventDefault();
            nav.classList.add('active');
        });
        clsNav.addEventListener('click', (even) => {
            even.preventDefault();
            nav.classList.remove('active');
        });
    }

};