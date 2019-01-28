module.exports = () => {
    /*
    *
    ****************** Variables
    *
    */

    const burgerBtn = document.querySelector('.burger_menu');
    const menu = document.querySelector('.header_nav');
    const clsMenu = document.querySelector('.nav_cls');

    burgerBtn.addEventListener('click', (even) => {
        even.preventDefault();
        menu.classList.add('active');
        clsMenu.classList.add('active');
    });

    clsMenu.addEventListener('click', (even) => {
        even.preventDefault();
        menu.classList.remove('active');
        clsMenu.classList.add('active');
    });

};