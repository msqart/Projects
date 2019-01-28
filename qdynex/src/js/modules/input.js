module.exports = (arrElem) => {

    const placeholderAnimationIn = require('./functions/placeholderAnimationIn');

    for (let i = 0; i < arrElem.length; i++) {
        const placeholder = arrElem[i].querySelector('.styled-input__placeholder-text');
        const input = arrElem[i].querySelector('.styled-input__input');

        let value = placeholder.innerText.split('');
        placeholder.innerHTML = '';

        value.forEach((elem) => {
            if (elem === ' ') elem = '&#160;';
            let span = document.createElement('span');
            span.className = 'letter';
            span.innerHTML = `${elem}`;
            placeholder.appendChild(span);
        });

        input.addEventListener('focus', function () {
            arrElem[i].classList.add('active');
            placeholderAnimationIn(arrElem[i], true);
        }, false);

        input.addEventListener('blur', function () {
            if (input.value.length) return;
            arrElem[i].classList.remove('active');
            placeholderAnimationIn(arrElem[i], false);
        }, false);
    }

};