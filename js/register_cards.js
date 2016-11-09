




/*
     FILE ARCHIVED ON 2:15:51 Jun 29, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:43:20 Nov 9, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/**
* @author Ikaros Kappler
* @date 2014-03-17
* @version 1.0.0
**/

function show_register_card( id ) {

    var divs = document.getElementsByTagName( "DIV" );
    for( var i = 0; i < divs.length; i++ ) {

	var entry = divs[i];
	if( !entry.className || entry.className != "register_card" )
	    continue;

	// window.alert( entry.className + ", id=" + entry.id + ", making visible: " + (entry.id == id) );


	if( entry.id == id )
	    entry.style.display = "block";
	else
	    entry.style.display = "none";

    }



    var spans = document.getElementsByTagName( "SPAN" );
    var tabID = "regh_" + id;
    for( var i = 0; i < spans.length; i++ ) {

	var entry = spans[i];
	if( !entry.className || (entry.className != "register_tab" && entry.className != "register_tab_selected") )
	    continue;

	//window.alert( entry.className + ", id=" + entry.id + ", making visible: " + (entry.id == id) );
	
	if( entry.id == tabID )
	    entry.className = "register_tab_selected";
	else
	    entry.className = "register_tab";

    }
    

}
