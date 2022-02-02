var map = L.map('mapid').setView([37.760109273244524, -122.4414471468871], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

$.getJSON("sf_crime.geojson",function(data){
	var ratIcon = L.icon({
		iconUrl: "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/43207/oncoming-police-car-emoji-clipart-md.png",
		iconSize: [40,40]
	});
    L.geoJson(data ,{
    pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: ratIcon});
    }
  } ).addTo(map);
});
