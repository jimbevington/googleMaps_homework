const MapWrapper = function(container, coords, zoom){

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });

  this.markers = [];

}

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  })
  this.markers.push(marker);
};

MapWrapper.prototype.getCoords = function () {
  let lati = event.latLng.lat();
  let long = event.latLng.lng();
  return {lat: lati, lng: long};
};
