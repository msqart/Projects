var map;
var mapBlock = document.getElementById('map');


var initMap = function () {
    map = new google.maps.Map(mapBlock, {
        zoom: 15,
        center: new google.maps.LatLng(50.458233, 30.525519),
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
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
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
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
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
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
    });

    var features = [
        {
            position: new google.maps.LatLng(50.458233, 30.525519),
            scaledSize: new google.maps.Size(100, 100)
        }
    ];

    var icon = {
        url: "none",
        scaledSize: new google.maps.Size(100, 100)
    };

    features.forEach(function (feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: 'img/map.png',
            map: map
        });
        var marker = new google.maps.Marker({
            position: feature.position,
            title: 'We are here',
            icon: icon,
            map: map
        });
    });
}
