const initalize = function(){

  const container = document.getElementById('map-div');
  const startCenter = {lat: 0, lng: 0};
  const startZoom = 1;

  const map = new MapWrapper(container, startCenter, startZoom);

}


window.addEventListener("DOMContentLoaded", initalize);
