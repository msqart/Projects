var wrapMap = document.getElementById('map');
var arrMapElem = document.querySelectorAll('.map_data .map_elem');
var wrapMapCenter = {lat: 49.519000, lng: 28.491836};




/*map footer*/
var city = {
    marker: {lat: 50.419011, lng: 30.491839},
    center: {lat: 50.419011, lng: 30.483839}
};


var map = null;
var yak = 0;
var activeElem = 0;
var features = [];
var arrMarker = []

function movePopup(arr, int) {
    for (var p = 0; p < arr.length; p++) {
        arr[p].classList.remove('active');
    }
    arr[int].classList.add('active');
}

if (window.innerWidth < 1400) {
    wrapMapCenter = {lat: 50.419011, lng: 28.491839};
    city.marker = {lat: 50.419011, lng: 30.473839};
}

if (window.innerWidth < 1000) {
    wrapMapCenter = {lat: 50.419011, lng: 30.491839};
    city.marker = {lat: 50.419011, lng: 30.473839};
}

function initMap() {
    /*map object*/
    if (wrapMap !== null) {
        map = new google.maps.Map(wrapMap, {
            zoom: 6,
            center: wrapMapCenter,
            mapTypeId: 'roadmap',
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#444444"
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "saturation": "-65"
                        },
                        {
                            "lightness": "45"
                        },
                        {
                            "gamma": "1.78"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "saturation": "-33"
                        },
                        {
                            "lightness": "22"
                        },
                        {
                            "gamma": "2.08"
                        }
                    ]
                },
                {
                    "featureType": "transit.station.airport",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "gamma": "2.08"
                        },
                        {
                            "hue": "#ffa200"
                        }
                    ]
                },
                {
                    "featureType": "transit.station.airport",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.station.rail",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.station.rail",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "saturation": "-55"
                        },
                        {
                            "lightness": "-2"
                        },
                        {
                            "gamma": "1.88"
                        },
                        {
                            "hue": "#ffab00"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#bbd9e5"
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                }
            ]
        });

        for (var i = 0; i < arrMapElem.length; i++) {
            var posData = arrMapElem[i].querySelector('.map_elem_geo').innerHTML.split(',');
            features.push({
                position: new google.maps.LatLng(posData[0].split(':')[1], posData[1].split(':')[1]),
                count: i
            });
            if (arrMapElem[i].classList.contains('active')) {
                activeElem = i;
            }
        }

        features.forEach(function (feature) {
            var marker = new google.maps.Marker({
                position: feature.position,
                icon: 'img/map-all.png',
                map: map,
                count: feature.count
            });
            arrMarker.push(marker);
            marker.addListener('click', function (e) {
                for (var i = 0; i < arrMarker.length; i++) {
                    arrMarker[i].setIcon('img/map-all.png');
                }
                this.setIcon('img/map.png');
                movePopup(arrMapElem, this.count);
            });
            if (yak === activeElem) {
                marker.setIcon('img/map.png');
            }
            yak++;
        });
    }
}
