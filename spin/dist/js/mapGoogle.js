var map;
var mapBlock = document.getElementById('map');

var scriptMap = document.createElement('script');

scriptMap.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDzrDLaTqQRrY8xss7UUDtLQxJ7S2fajj4&callback=initMap');

document.body.appendChild(scriptMap);

function initMap() {
    map = new google.maps.Map(mapBlock, {
        zoom: 14,
        center: new google.maps.LatLng(50.471753, 30.504656),
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
                        "color": "#f4f4f4"
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
            position: new google.maps.LatLng(50.471753, 30.504656)
        }
    ];

    features.forEach(function (feature) {
        /*var marker = new google.maps.Marker({
            position: feature.position,
            map: map
        });*/
    });
}
