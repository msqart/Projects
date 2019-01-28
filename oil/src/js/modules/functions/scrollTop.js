module.exports = function (arrowUp) {

    if (document.body.scrollHeight - (window.pageYOffset + window.innerHeight) <= 330) {
        arrowUp.classList.add('active');
    } else {
        arrowUp.classList.remove('active');
    }


};
