module.exports = (wrap) => {
    const arrElem = wrap.querySelectorAll('.advantages_elem_bg');

    function getRandomKeyframe() {
        let newScale = Math.round(Math.random() * 2) / 2,
            newTranslateX = Math.round(Math.random() * (1.1 * maxTranslateX) - maxTranslateX),
            newTranslateY = Math.round(Math.random() * (1.1 * maxTranslateY) - maxTranslateY);

        return {transform: `scale(${newScale}) translate(${newTranslateX}%, ${newTranslateY}%)`};
    }

    function getRandomTiming() {
        return {
            delay: Math.random() * 1000,
            duration: (Math.random() * 4 + 1) * 1000,
            easing: 'ease-in-out',
            fill: 'forwards',
            iterations: 1
        };
    }

    function animateParticle(particle, lastKeyframe) {
        let firstKeyframe = lastKeyframe || {transform: 'scale(1) translate(-50%, -50%)'},
            secondKeyframe = getRandomKeyframe();

        particle.animate(
            [firstKeyframe, secondKeyframe],
            getRandomTiming()
        ).onfinish = function () {
            animateParticle(particle, secondKeyframe);
        };
    }

    let maxTranslateX = Math.floor((arrElem[0].clientWidth / 2) / 30) * 100,
        maxTranslateY = Math.floor((arrElem[0].clientHeight / 2) / 30) * 100;


    for (let i = 0; i < arrElem.length; i++) {
        let arrElemImg = arrElem[i].querySelectorAll('img');

        let particles = Array.from(arrElemImg);

        particles.forEach(function (particle) {
            animateParticle(particle);
        });

    }
    
};