module.exports = (form) => {
    let arrName = form.querySelectorAll('[name]');
    let result = '';

    for (let i = 0; i < arrName.length; i++) {
        result += `${(i === 0) ? '' : '&'}${arrName[i].getAttribute('name')}=${encodeURIComponent(arrName[i].value)}`;

        if (arrName[i].nodeName === 'SELECT') {
            arrName[i].options[0].selected = true;
        } else {
            arrName[i].value = '';
        }
    }
    return result;
};