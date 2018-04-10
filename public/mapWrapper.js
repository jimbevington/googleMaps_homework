const MapWrapper = function(container, coords, zoom){

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });

  this.markers = [];

}

MapWrapper.prototype.addInfoWindow = function (content) {
  const info = new google.maps.InfoWindow({
    content: content
  });
  return info;
};

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  })
  this.markers.push(marker);
  return marker;
};

MapWrapper.prototype.addInfoToMarker = function (marker, info) {
  marker.addListener('click', function(){
    info.open(this.googleMap, marker);
  })
};

MapWrapper.prototype.getCoords = function (event) {
  let lati = event.latLng.lat();
  let long = event.latLng.lng();
  return {lat: lati, lng: long};
};

MapWrapper.prototype.addClickEvent = function () {
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    let coords = this.getCoords(event);
    this.addMarker(coords);
  }.bind(this));
};
