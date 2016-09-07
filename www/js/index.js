// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();

$(document).on("pagecreate", "#main", function () {

    $("#list").filterable('option', 'filterCallback', checkedOrMatch);
    
    $("#searchAttr input").on("change", function(){
        $("#list").filterable("refresh");
    });
});

function checkedOrMatch(idx, searchValue) {
    var ret = false;
    var day = $("#day").is(':checked');
    var week = $("#week").is(':checked');
    var ignoreDur = false;
    if (!day && !week) {
                ignoreDur = true;
    }
    
    //if (searchValue && searchValue.length > 0) {
        searchValue = searchValue.toLowerCase();
        var filttext = $(this).data("filter") || '';
        var dur = $(this).data("dur") || '';
        filttext = filttext.toLowerCase();
        if (filttext.indexOf(searchValue) < 0) {
            ret = true; //filter this one out
        } else if (!ignoreDur) {       
            //found filter text now check language
          if (  (dur == "day" && !day) || (dur == "week" && !week) ) {
            ret = true; //filter this one out
          }            
        }      
   //}    
    return ret;
}