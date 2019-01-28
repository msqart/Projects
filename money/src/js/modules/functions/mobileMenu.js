module.exports = (burgerMenu) => {

    /*
    *
    ******************* Variables
    *
    */
    const menu = document.querySelector('.nav');
    const clsMenu = document.querySelector('.cls_menu');


    burgerMenu.addEventListener('click', (even) => {
        even.preventDefault();
        menu.classList.add('active');
        clsMenu.classList.add('active');
    });
    clsMenu.addEventListener('click', (even) => {
        even.preventDefault();
        menu.classList.remove('active');
        clsMenu.classList.remove('active');
    });

};