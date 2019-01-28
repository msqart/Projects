module.exports = (elem, maxHeight) => {
    let step = 1;
    requestAnimationFrame(function open() {
        step += step / 3;
        elem.style.height = `${step}px`;
        if (step <= maxHeight) {
            requestAnimationFrame(open);
        } else {
            elem.style.height = 'auto';
        }
    });
};