module.exports = (input) => {
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('change', (even) => {
            if (input[i].value !== '') {
                input[i].classList.add('focus');
            } else if (input[i].value === '') {
                input[i].classList.remove('focus');
            }
        });
    }
};