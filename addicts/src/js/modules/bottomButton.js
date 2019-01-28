module.exports = (fixCall, fixUp) => {

    if (document.body.scrollHeight - (window.pageYOffset + window.innerHeight) <= 330) {
        fixCall.classList.add('bottom');
        fixUp.classList.add('bottom');
    } else {
        fixCall.classList.remove('bottom');
        fixUp.classList.remove('bottom');
    }
};
