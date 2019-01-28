module.exports = (form) => {

    const XMLHttpRequestPromise = require('xhr-promise'),
        xhrPromise = new XMLHttpRequestPromise(),
        input = form.querySelector('#input_search'),
        constbutton = form.querySelector('#input_search');
    const resultErrorDiv = document.getElementById('result_error');

    form.addEventListener('submit', function (even) {
        even.preventDefault();
        let data = input.value;
        xhrPromise.send({
            method: 'POST',
            url: '/check',
            data: `url=${data}`
        })
            .then(function (results) {
                if (results.status !== 200) {
                    throw new Error('request failed');
                }
                resultErrorDiv.innerHTML = results.responseText;
            })
            .catch(function (e) {
                console.error(e, 'XHR error');
            });
    })
};