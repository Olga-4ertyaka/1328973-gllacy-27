function initMap() {
    map = new google.maps.Map(document.getElementById('map-googl'), {
      center: { lat: 59.939201, lng: 30.328302 },
      zoom: 16,
      disableDefaultUI: true
    });

    var myLatLng = new google.maps.LatLng(59.938531, 30.323055);
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: 'img/icon-map.png'
    });

  }
