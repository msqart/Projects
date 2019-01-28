module.exports = (wrap) => {

    const waveOne = wrap.querySelector('.wave_one path');
    const waveTwo = wrap.querySelector('.wave_two path');
    const waveThree = wrap.querySelector('.wave_three path');
    const aircraftOne = wrap.querySelector('.aircraft_one');
    const anime = require('animejs');


    anime({
        targets: waveOne,
        d: [`M64.7,0c0,0-103,184-49,262s229,30,229,30s163.9-26,182.9,67s61.1,238,122.1,266s165-25,165-25s71-39,81,6
		s4,102,37,99s18-705,18-705H64.7z`, `M96.5,0c0,0-138,208-84,286s262,15,262,15s194-37,213,56s23,265,84,293s175-50,175-50s79-50,89-5
		s-5,129,28,126s19-721,19-721H96.5z`],
        duration: 4000,
        loop: true,
        direction: "alternate",
        easing: "linear"
    });

    // anime({
    //     targets: waveTwo,
    //     d: [`M30.3,325.5c0,0,105-65.3,256.5-54C468.3,285,583.8,414,679.8,444c96,30,247.5,63,298.5-13.5
    // s143.2-248.8,319.5-277.5c129-21,205.5,15,282,43.5c76.5,28.5,144,51,157.5-15c13.5-66,13.5-183,64.5-181.5s0,552,0,552
    // s-642.4,169.5-1252.4,76.5S1.8,466.5,1.8,466.5L30.3,325.5z`, `M29.4,308.6c0,0,100.4-133.9,251.9-122.6c181.5,13.5,290,270,386,300s267-7.5,318-84
    // c51-76.5,129.7-307.3,306-336c129-21,207.5,77.5,284,106c76.5,28.5,108.5,20,122-46c13.5-66,47-127.5,98-126
    // c51,1.5,5.5,535.1,5.5,535.1S1173.2,748.9,563.2,655.9S0.9,449.6,0.9,449.6L29.4,308.6z`],
    //     duration: 4000,
    //     loop: true,
    //     direction: "alternate",
    //     easing: "linear"
    // });
    anime({
        targets: waveThree,
        d: [`M58.4,32.8c0,0,148-76,236.5,3.5s77.5,201.5,79.5,262.5s-31.5,182.5,31.5,193.5s93-41.2,177-84.2
	s154.5-83.8,214.5-61.3s129.5,173.5,175.5,235.5s247-57,273-78c26-21,89.1-95.7,115.5-115.5c32.4-24.2,77-84.5,156-61.5
	s144.5,126.5,217.5,112.5s110.4-60.1,124.4-79.1l-5,272c0,0-416.4,162.6-792.9,140.1c-376.5-22.5-770.5-71-964-201.5
	S58.4,32.8,58.4,32.8z`, `M58.4,16.7c0,0,151-52,239.5,27.5s55.4,175.4,57.4,236.4s-10.9,159.1,52.1,170.1s90-24.5,174-67.5
	s144-61.4,204-39s147.5,140.5,193.5,202.5c46,62,262-28.5,288-49.5s72-91.8,98.4-111.6c32.4-24.2,76.1-79.4,155.1-56.4
	s143,90.2,216,76.2s108.9-41.8,122.9-60.8l-5,272c0,0-417.9,188.1-794.4,165.6c-376.5-22.5-769-96.5-962.5-227S58.4,16.7,58.4,16.7z
	`],
        duration: 4000,
        loop: true,
        direction: "alternate",
        easing: "linear"
    })


};