  
Meteor.startup(function(){
	GoogleMaps.load();
});

Template.gmap.onRendered(function(){
	GoogleMaps.load();
});

Template.gmap.helpers({
  'exampleMapOptions': function() {
    // Make sure the maps API has loaded
    // if (GoogleMaps.loaded()) {
    //   // Map initialization options
    //   return {
    //     center: new google.maps.LatLng(-37.8136, 144.9631),
    //     zoom: 8
    //   };
    // }
    // var a = _lat.get();
    // var b = _lon.get();
    var a = -34.397;
    var b = 150.644;
    alert("hello");
    document.getElementById("textbox1").value = "locations : "+ a + " : " + b ;  

    // reverseGeocode.getLocation(a, b, function(location){   
    
    // var c = reverseGeocode.getAddrStr();
    // document.getElementById("txtlocation").value =c;
    // Session.set('location', c);

    // });
    
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
    // Map initialization options
      return {
        center: new google.maps.LatLng( a , b ),
        zoom: 18 
      };
    }
    },

    // lat: function () { return _lat.get(); },
    // lon: function () { return _lon.get(); } 
});

/*_lat = {
    current: 0,
    dep: new Deps.Dependency(),
    get: function(){
        this.dep.depend();
        return this.current;
    },
    set: function(value){
        this.current = value;
        this.dep.changed();
        return this.current;
    }
};

_lon = {
    current: 0,
    dep: new Deps.Dependency,
    get: function(){
        this.dep.depend();
        return this.current;
    },
    set: function(value){
      this.current = value;
        this.dep.changed();
        return this.current;
    }
};
*/
// if (navigator.geolocation){
//     Meteor.setInterval(function() {
//         navigator.geolocation.getCurrentPosition(function(position) {
//             _lat.set(position.coords.latitude);
//             _lon.set(position.coords.longitude);
//         }, showError);
//     }, 5000);
// } else {
//     //console.log("Geolocation is not supported by this browser.");
// }

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            //console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            //console.log("Location information is unavailable.");
          break;
        case error.TIMEOUT:
            //console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            //console.log("An unknown error occurred.");
            break;
    }
    }
  
// Template.gmap.helpers({
//   'exampleMapOptions':function(){
//     // return {
//     //     center: new google.maps.LatLng( -37.8136, 144.9631),
//     //     zoom: 18 
//     // };
//     var map = new google.maps.Map(document.getElementById('map-container'), {
//           center: {lat: -34.397, lng: 150.644},
//           zoom: 8
//         });
//   }

// });

Template.gmap.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});

// GoogleMaps.create({
//   name: 'exampleMap',
//   element: document.getElementById('exampleMap'),
//   options: {
//     center: new google.maps.LatLng(-37.8136, 144.9631),
//     zoom: 8
//   }
// });