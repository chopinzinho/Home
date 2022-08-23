var service; 
var placeResult = null;

function initMap() {  
  var map = new google.maps.Map(document.getElementById('map'));
  var request = {
  placeId: 'ChIJof4Msojv75QRfEplq4dIq78',
  fields: ['name', 'rating', 'reviews']
};

service = new google.maps.places.PlacesService(map);
service.getDetails(request, callback);
  
}
function callback(place, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    placeResult = place;
  }
}

var menu =[ 
    {'name':'#s', 'page':'./servicos.html'},
    {'name':'#c', 'page':'./empresa.html'},
    {'name':'#a', 'page':'./depoimentos.html'}
];

function changeTab(value){
    $('.nav-link').removeClass("active");
    $(value).addClass("active");
    var item = menu.find((e) => e.name == value);
    $( "#main" ).load( item.page );
}

function shake(){
    var whats = document.getElementById("whats");
    whats.style.animationIterationCount = "infinite";
    setTimeout(function(){
        whats.style.animationIterationCount = "0";
    }, 1000);
} 

$(document).ready(function(){ 
    changeTab("#s");
    setInterval(shake, 10000);
});