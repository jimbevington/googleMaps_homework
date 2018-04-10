const initalize = function(){

  const container = document.getElementById('map-div');
  const startCenter = {lat: 0, lng: 0};
  const startZoom = 2;

  const map = new MapWrapper(container, startCenter, startZoom);

  // be able to create new Marker
  const stalinWorld = {lat: 54.022091, lng: 24.079799};
  map.addMarker(stalinWorld);
  map.addInfoWindow()
  // to put new markers when clicked
  map.addClickEvent();
}


window.addEventListener("DOMContentLoaded", initalize);
