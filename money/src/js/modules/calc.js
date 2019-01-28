module.exports = (calc) => {
    const cost = calc.querySelector('.calc_cost');
    const day = calc.querySelector('.calc_day');
    const costValue = calc.querySelector('.calc_cost_value span');
    const dayValue = calc.querySelector('.calc_day_value span');
    const dataType = calc.getAttribute('data-type');
    const costResultPercent = calc.querySelector('.calc_info .cost_result_percent span');
    const dayStatic = 30;
    const percentData = +calc.getAttribute('data-percent') / 12 / 100;

    function getPay() {
        return Math.ceil(day.value / dayStatic);
    }

    function setSpaceNumber(number) {
        return (number + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    }

    function getDayPercent() {
        let countMonth = getPay();
        return roundOff(
            +cost.value * (percentData * (Math.pow((1 + percentData), +countMonth)) / ((Math.pow((1 + percentData), +countMonth)) - 1)));
    }

    function percent() {
        if (dataType === 'day') {
            costResultPercent.innerHTML = setSpaceNumber(getDayPercent());
        } else {
            let sum = +cost.value;
            costResultPercent.innerHTML =
                setSpaceNumber(roundOff(
                    sum * (percentData * (Math.pow((1 + percentData), +day.value)) / ((Math.pow((1 + percentData), +day.value)) - 1))
                ));
        }
    }

    function roundOff(data) {
        return data.toFixed(2);
    }

    cost.addEventListener('input', (even) => {
        even.preventDefault();
        costValue.innerHTML = setSpaceNumber(cost.value);
        percent();
    });

    day.addEventListener('input', (even) => {
        even.preventDefault();
        dayValue.innerHTML = day.value;
        percent();
    });

    /*вводим первоначальные данные*/
    calc.querySelector('.calc_cost_scale .calc_scale_start span').innerHTML = cost.getAttribute('min');
    calc.querySelector('.calc_cost_scale .calc_scale_finish span').innerHTML =
        calc.querySelector('.calc_title_max').innerHTML = setSpaceNumber(cost.getAttribute('max'));

    calc.querySelector('.calc_day_scale .calc_scale_start span').innerHTML = day.getAttribute('min');
    calc.querySelector('.calc_day_scale .calc_scale_finish span').innerHTML = day.getAttribute('max');

    costValue.innerHTML = setSpaceNumber(cost.value);
    dayValue.innerHTML = day.value;
    percent();

    // costValue.innerHTML = cost.value;
    // dayValue.innerHTML = day.value;

    // let sum = 5000;
    // let i = 60 / 12 / 100;
    // let n = 6;
    //
    // let k = sum * (i * (Math.pow((1 + i), n)) / ((Math.pow((1 + i), n)) - 1));
    // console.log(k);

};