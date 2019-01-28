module.exports = (arrStep) => {
    let data = '';

    function getDataInput(elem) {
        let arrInput = elem.querySelectorAll('input');
        let dataElem = '';
        for (let i = 0; i < arrInput.length; i++) {
            if (arrInput[i].checked) {
                let dataLabel = arrInput[i].parentElement.querySelector('label').innerHTML;
                dataElem = `${dataElem} ${dataLabel},`;
            }
        }
        return dataElem.slice(0, dataElem.length - 1) + ';';
    }

    for (let i = 0; i < arrStep.length; i++) {
        let title = arrStep[i].querySelector('.title_test').innerHTML;
        data = `${data}&${title}=${getDataInput(arrStep[i])}`;
    }

    return data;
};