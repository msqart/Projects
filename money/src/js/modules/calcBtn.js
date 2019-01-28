module.exports = (btn, elem) => {

    function setActive(active) {
        for (let i = 0; i < btn.length; i++) {
            btn[i].classList.remove('active');
            elem[i].classList.remove('active');
        }
        btn[active].classList.add('active');
        elem[active].classList.add('active');
    }

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', (even) => {
            even.preventDefault();
            setActive(i);
        });
    }

    btn[0].classList.add('active');
    elem[0].classList.add('active');
};