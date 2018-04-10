const initalize = function(){

  const container = document.getElementById('map-div');
  const startCenter = {lat: 0, lng: 0};
  const startZoom = 2;

  const map = new MapWrapper(container, startCenter, startZoom);

  // create Test Marker
  const stalinWorld = {lat: 54.022091, lng: 24.079799};
  let stalinWorldMarker = map.addMarker(stalinWorld);

  // create Info Window
  const info = "Visit Stalin World!"
  let stalinWorldInfo = map.addInfoWindow(info);

  map.addInfoToMarker(stalinWorldMarker, stalinWorldInfo);

  // to put new markers when clicked
  map.addClickEvent();
}

window.addEventListener("DOMContentLoaded", initalize);
