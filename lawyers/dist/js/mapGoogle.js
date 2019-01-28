'use strict';
var map = null, marker = null;
var mapBlock = document.getElementById('map');
var cityArr = document.querySelectorAll('.map_city__main .city');
var scriptMap = document.createElement('script');

scriptMap.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDzrDLaTqQRrY8xss7UUDtLQxJ7S2fajj4&callback=initMap');
document.body.appendChild(scriptMap);

function getDataCity(elem) {
    return [elem.getAttribute('data-map').split(','), elem.getAttribute('data-map-center').split(',')];
}

function setActive(arr, active) {
    for (var o = 0; o < arr.length; o++) {
        arr[o].classList.remove('active');
    }
    active.classList.add('active');
}

function setDataToMap(data) {
    marker.setPosition({lat: +data[0][0], lng: +data[0][1]});
    map.setCenter({lat: +data[1][0], lng: +data[1][1]});
}

if (cityArr.length > 0) {
    for (var i = 0; i < cityArr.length; i++) {
        cityArr[i].addEventListener('click', function (even) {
            setDataToMap(getDataCity(this));
            setActive(cityArr, this);
        });
    }
}

function initMap() {
    map = new google.maps.Map(mapBlock, {
        zoom: 12,
        center: new google.maps.LatLng(50.460150, 30.603395),
        mapTypeId: 'roadmap',
        styles: [
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fff4f0"
                    },
                    {
                        "saturation": 30
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fff4f0"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#d6e2f3"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "saturation": -35
                    },
                    {
                        "lightness": 35
                    },
                    {
                        "weight": 4.5
                    }
                ]
            }
        ]
    });

    var features = [
        {
            position: new google.maps.LatLng(50.449828, 30.487366)
        }
    ];

    features.forEach(function (feature) {
        marker = new google.maps.Marker({
            position: feature.position,
            icon: 'img/map.png',
            map: map
        });
    });

}

cityArr[0].classList.add('active');