module.exports = () => {
    const mobileMenu = document.querySelector('.nav_mobile_btn');
    const navMenu = document.querySelector('.nav_wrap');
    const headerMobile = document.querySelector('.header_main');
    mobileMenu.addEventListener('click', (even) => {
        even.preventDefault();
        mobileMenu.classList.toggle('btn_active');
        navMenu.classList.toggle('mobile_active');
        headerMobile.classList.toggle('fixed');
    });
};
