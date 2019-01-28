module.exports = (navList, burgerMenu, navCls, nav) => {
    const navListArrow = navList.querySelectorAll('.nav_arrow');

    for (let i = 0; i < navListArrow.length; i++) {
        navListArrow[i].addEventListener('click', (even) => {
            let parentA = navListArrow[i].parentNode;
            parentA.classList.toggle('active');
            even.preventDefault();
        })
    }

    /*set active menu on click burger*/
    burgerMenu.addEventListener('click', (even) => {
        even.preventDefault();
        nav.classList.add('active');
    });

    /*disable active menu on click burger*/
    navCls.addEventListener('click', (even) => {
        even.preventDefault();
        nav.classList.remove('active');
    });
};