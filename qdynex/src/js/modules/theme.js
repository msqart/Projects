module.exports = (controlBlock) => {
    const date = new Date();
    const body = document.querySelector('body');
    const startTimeDay = 9, finishTimeDay = 15, hours = date.getHours();
    const controlCheck = controlBlock.querySelector('.theme_change');
    let scriptMap = document.querySelector('.scriptMap');
    let mapHttp = document.querySelector('.mapHttp');

    function setTheme(boll) {
        localStorage.setItem('themeControl', 'true');
        if (boll) {
            body.classList.remove('dark');
            body.classList.add('white');
            localStorage.setItem('theme', 'white');
        } else {
            body.classList.remove('white');
            body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    function setMapTheme(boll) {
        mapHttp = document.querySelector('.mapHttp');
        document.body.removeChild(mapHttp);
        mapHttp = document.createElement('script');
        mapHttp.async = true;
        mapHttp.className = 'mapHttp';

        mapHttp.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDzrDLaTqQRrY8xss7UUDtLQxJ7S2fajj4&callback=initMap');
        document.body.appendChild(mapHttp);

        scriptMap = document.querySelector('.scriptMap');
        document.body.removeChild(scriptMap);

        scriptMap = document.createElement('script');
        scriptMap.async = true;
        scriptMap.className = 'scriptMap';
        document.getElementById('map').innerHTML = '';
        scriptMap.setAttribute('src', `dist/js/mapGoogle${(boll) ? 'White' : 'Dark'}.js`);
        scriptMap.className = 'scriptMap';
        document.body.appendChild(scriptMap);
    }

    controlCheck.addEventListener('change', (even) => {
        even.preventDefault();
        setTheme(controlCheck.checked);
        setMapTheme(controlCheck.checked);
    });


    if (localStorage.getItem('theme') === 'white') {
        controlCheck.setAttribute('checked', 'checked');
    }

    if (localStorage.getItem('themeControl')) {
        body.classList.add(`${localStorage.getItem('theme')}`);
        return true;
    }

    if (hours >= startTimeDay && hours < finishTimeDay) {
        body.classList.add('white');
        localStorage.setItem('theme', 'white');
    } else {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    if (localStorage.getItem('theme') === 'white') {
        controlCheck.setAttribute('checked', 'checked');
    }

};
