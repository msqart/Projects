module.exports = (elem) => {
    elem = (typeof elem === 'string') ? document.querySelector(elem) : elem;

    let styles = window.getComputedStyle(elem);
    let margin = parseFloat(styles['marginTop']) +
        parseFloat(styles['marginBottom']);

    return Math.round(elem.offsetHeight + margin);
};