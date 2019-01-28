module.exports = (about) => {
    const getHeight = require('./getHeight');
    const aboutButton = about.querySelector('.seo_more');
    const aboutWrap = about.querySelector('.main_about__bottom_wrap');
    let heightWrap = getHeight(aboutWrap);


    function close(elem, maxHeight) {
        let step = maxHeight;
        let speed = 3;
        requestAnimationFrame(function close() {
            speed += speed / 6;
            step -= speed;
            console.log(step, elem);
            elem.style.height = `${step}px`;
            if (step >= 0) {
                requestAnimationFrame(close);
            } else {
                elem.style.height = `0`;
            }
        });
    }

    function open(elem, maxHeight) {
        let step = 3;

        requestAnimationFrame(function open() {
            step += step / 3;
            elem.style.height = `${step}px`;
            if (step <= maxHeight) {
                requestAnimationFrame(open);
            } else {
                elem.style.height = 'auto';
            }
        });
    }


    aboutButton.addEventListener('click', () => {
        if (aboutButton.classList.toggle('active')) {
            open(aboutWrap, heightWrap);
        } else {
            heightWrap = getHeight(aboutWrap);
            close(aboutWrap, heightWrap);
        }
    });
    aboutWrap.style.height = `${0}`;
};

