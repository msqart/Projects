module.exports = (checkbox, button) => {
    const accept = document.querySelectorAll(checkbox);
    const btnForm = document.querySelectorAll(button);
    for (let i = 0; i < accept.length; i++) {
        btnForm[i].setAttribute("disabled", true);
        btnForm[i].classList.add('no_active');
        accept[i].addEventListener('click', (event => {
            if (accept[i].checked) {
                btnForm[i].removeAttribute("disabled");
                btnForm[i].classList.remove('no_active');
            }
            else {
                btnForm[i].setAttribute("disabled", true);
                btnForm[i].classList.add('no_active');
            }
        }));
    }
};