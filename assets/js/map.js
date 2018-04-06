
fetch('https://api.instagram.com/v1/users/7425095298/media/recent/?access_token=7425095298.871d6ad.888a114039514a6f9199309044984825')
  .then(function (response) {
    //Turns the the JSON into a JS object
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    for (var i in data) {
      var instData = data.data
      console.log(instData)
    }

    localStorage.setItem('datos', JSON.stringify(instData));

  });

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: { lat: -22.7761424, lng: -41.9062032 }
  });
  var center = new google.maps.LatLng(-22.7828694, -41.9106232)
  var logo = 'http://maps.google.com/mapfiles/kml/paddle/grn-stars.png';
  var camera = './assets/img/instagram-icon.png';

  // marcador inicial

  // var marker = new google.maps.Marker({
  //   position: center,
  //   icon: camera,
  //   // draggable: true,
  //   // animation: google.maps.Animation.BOUNCE,
  //   animation: google.maps.Animation.DROP,
  //   map: map
  // });
  // marker.addListener('click', function() {
  //   infowindow.open(map, marker);
  // });

  const objectoRecuperado = localStorage.getItem('datos');
  const locations = ('objectoRecuperado:', JSON.parse(objectoRecuperado));
  console.log(locations)


  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i].location.latitude, locations[i].location.longitude),
      icon: camera,
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        // infowindow.setContent({content: contentString});
        infowindow.setContent(`<div class="boxMapa">
            <div class="col col-sm-3 text-left">
            <img src="${locations[i].user.profile_picture}" alt="..." class="rounded-circle logo-pop-vf">
            </div>
            <div class="col col-sm-9">
            <small>${locations[i].user.full_name}</small>
            <h6>${locations[i].location.name}</h6>
            </div>
            </div>
            <img src="${locations[i].images.standard_resolution.url}" class="figure-img img-fluid" alt="A generic square placeholder image with rounded corners in a figure.">
            <figcaption class="figure-caption">${locations[i].likes.count} Me gusta</figcaption>
           ` )
        map.setOptions({

        })
        infowindow.open(map, marker,);
      }
    })(marker, i));


  }
  var infowindow = new google.maps.InfoWindow({

    maxWidth: 500,
    maxHeight: 200
  });

}
$("#contenti").click(function () {
  $("#foo").empty();
})