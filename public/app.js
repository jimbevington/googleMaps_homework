const initalize = function(){

  const container = document.getElementById('map-div');
  const startCenter = {lat: 0, lng: 0};
  const startZoom = 2;

  const map = new MapWrapper(container, startCenter, startZoom);

  // be able to create new Marker
  // const testCoords = {lat: 35.1709827, lng: -5.3059999};
  // map.addMarker(testCoords);
  // to put new markers when clicked
  map.addClickEvent();
}


window.addEventListener("DOMContentLoaded", initalize);
