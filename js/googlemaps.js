function initMap() {

    var map;
    var myLatLng = {
        lat: -41.290460,
        lng: 174.777121
    };
    var LatLng = {
        lat: -41.291724,
        lng: 174.774648
    };

    var styles = [
        {
            "featureType": "water",
            "stylers": [{
                "gamma": 0.63
            }, {
                "visibility": "on"
            }]
        }
            , {
            "featureType": "road",
            "stylers": [{
                "gamma": 0.66
            }]
        }
            , {
            "featureType": "poi.business",
            "stylers": [{
                "visibility": "off"
            }]
        }
            , {
            "featureType": "poi.park",
            "stylers": [{
                "gamma": 0.64
            }]
        }
            //, { "elementType": "geometry.fill", "stylers": [{ "weight": 4.4 } ]},
            , {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#83a5b0"
            }]
        }
            , {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#bdcdd3"
            }]
        }
            , {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }]
        }
        ]
    var styledMap = new google.maps.StyledMapType(styles, {name: "Map"});
    google.maps.visualRefresh = true;

    var mapOptions = {
        center: myLatLng,
        scrollwheel: false,
        zoom: 16,
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        }

    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var imagetwo = '../img/icontwo.png';

    var contentStringOne = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Georgia</h1>' +
        '<div id="bodyContent">' +
        '<p>90 Dixon St' + '</p>' +
        'Georgia is located on the corner of Dixon St and Victoria St' +
        '<p>  &nbsp  </p>' +
        '</div>' +
        '</div>';

    var infowindowone = new google.maps.InfoWindow({
        content: contentStringOne
    });

    var icontwo = {
        url: '../img/icontwo.png', //url
        scaledSize: new google.maps.Size(40, 40), //size
        origin: new google.maps.Point(0, 0), //origin
        anchor: new google.maps.Point(0, 0),
    };

    var marker = new google.maps.Marker({
        map: map,
        position: LatLng,
        icon: icontwo,
    });
    marker.addListener('click', function () {
        infowindowone.open(map, marker);
    });


    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Stories</h1>' +
        '<div id="bodyContent">' +
        '<p>40 Cuba St' + '</p>' +
        'The original Stories is located at the bottom of Cuba St' +
        '<p>  &nbsp  </p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var icon = {
        url: '../img/icon.png', //url
        scaledSize: new google.maps.Size(40, 40), //size
        origin: new google.maps.Point(0, 0), //origin
        anchor: new google.maps.Point(0, 0),
    };

    var markerone = new google.maps.Marker({
        map: map,
        position: myLatLng,
        icon: icon,
    });
    markerone.addListener('click', function () {
        infowindow.open(map, markerone);
    });
}