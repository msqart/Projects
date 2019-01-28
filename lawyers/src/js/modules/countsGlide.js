module.exports = (elem) => {
    if (elem.querySelector('.glide__slider_control') !== null) {

        const left = elem.querySelector('.glide__slider_control .slick-prev');
        const right = elem.querySelector('.glide__slider_control .slick-next');
        const countActive = elem.querySelector('.slick-value .slick-value_active');
        const countElem = elem.querySelector('.slick-value .slick-value_count');
        const length = elem.querySelectorAll('.glide__slide').length;
        let yak = 1;


        function maxLength(boll, count) {
            if (boll) {
                return (count + 1 <= length) ? count + 1 : 1;
            } else {
                return (count - 1 > 0) ? count - 1 : length;
            }
        }

        function moveCount(boll) {
            yak = maxLength(boll, yak);
            countActive.innerHTML = `${yak}`;
        }

        left.addEventListener('click', (even) => {
            even.preventDefault();
            moveCount(false);
        });


        right.addEventListener('click', (even) => {
            even.preventDefault();
            moveCount(true);
        });

        countElem.innerHTML = `${length}`;
        countActive.innerHTML = `${yak}`;
    }
};