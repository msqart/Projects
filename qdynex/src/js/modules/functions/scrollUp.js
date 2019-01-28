module.exports = (btn, count) => {
    let step = count || 5;

    function animate() {
        step += Math.pow(step, .4);
        window.scrollBy(0, -step);
        if (window.pageYOffset > 1) {
            requestAnimationFrame(animate);
        } else {
            window.scrollTo(0, 0);
        }
    }

    btn.addEventListener('click', (even) => {
        even.preventDefault();
        step = count || 5;
        requestAnimationFrame(animate);
    });
};
