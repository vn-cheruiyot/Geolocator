var map = L.map('map').fitWorld();
// Adding Maplayer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 21,
    attribution: '© OpenStreetMap'
}).addTo(map);
// Zooming to geolocation
map.locate({
    setView: true, maxZoom:16
});
// Adding a location marker to detected location, showing accuracy in a popup
function onLocationfound(e){
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
    .bindPopup("You are within " +radius + " meters from this point").bindpopup();
    L.circle(e.latlng, radius).addTo(map);
}
map.on('locationfound', onLocationfound);

function onLocationError(e) {
    alert(e.mmessage);
}
map.on("locationerror", onLocationError);