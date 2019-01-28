module.exports = (form) => {
    let arrName = form.querySelectorAll('[name]');
    let result = '';
    const placeholderAnimationIn = require('./placeholderAnimationIn');

    for (let i = 0; i < arrName.length; i++) {
        result += `${(i === 0) ? '' : '&'}${arrName[i].getAttribute('name')}=${encodeURIComponent(arrName[i].value)}`;

        if (arrName[i].nodeName === 'SELECT') {
            arrName[i].options[0].selected = true;
            arrName[i].value = '';
        } else {
            arrName[i].value = '';
            placeholderAnimationIn(arrName[i].parentElement, false);
        }

        arrName[i].parentElement.classList.remove('active');
        arrName[i].removeAttribute('style');
    }
    return result;
};