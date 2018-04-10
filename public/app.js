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


  // add Take Me To Ouagadougou button
  const takeMeButton = document.getElementById('take-me-ouagadougou');
  //          Question ........ how do I put args in the below:
  takeMeButton.addEventListener('click', map.takeMeOuagadougou.bind(map));
  // add Where Am I button
  const whereAmI = document.getElementById('where-am-i');
  whereAmI.addEventListener('click', map.whereAmI.bind(map));
  // change Marker icon
  // style the shit out the map


  // to put new markers when clicked
  map.addClickEvent();
}

window.addEventListener("DOMContentLoaded", initalize);
