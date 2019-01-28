var map;
var mapBlock = document.getElementById('map');
var wrapMapCenter = {lat: 50.475567, lng: 30.323474};
var scriptMap = document.createElement('script');
if (window.innerWidth < 1178) {
    wrapMapCenter = {lat: 50.472445, lng: 30.362221};
}
scriptMap.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDzrDLaTqQRrY8xss7UUDtLQxJ7S2fajj4&callback=initMap');

document.body.appendChild(scriptMap);

function initMap() {
    map = new google.maps.Map(mapBlock, {
        zoom: 13,
        center: wrapMapCenter,
        mapTypeId: 'roadmap',
        styles: [
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f5f9fc"
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
                        "color": "#d6e2f3"
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
            position: new google.maps.LatLng(50.472445, 30.362221)
        }
    ];

    features.forEach(function (feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: 'img/map.png',
            map: map
        });
    });
}
