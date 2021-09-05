/* ------------------
| URL MODULE GROUP   |
------------------ */

$(document).ready(function(index) {
  var URL = 'li.modtype_url'
  var BOOK = 'li.modtype_book'
  var H5P = 'li.modtype_h5pactivity'

  // FIND ITEMS BASED ON CHARACTER SET
  var s = '1234567890';
  for (var i = 0; i < s.length; i++) {
    $(this).find(URL).add(BOOK).add(H5P).each(function() {
      if ($(this).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0) {
        $(this).first().css("background", "green");
        $(this).next().css("background", "blue")
      };
    });
  };
});


var mappedItems = $( "li.activity" ).map(function( index ) {
  var replacement = $( "<li>" ).text( $( this ).text() ).get( 0 );
  if ( index === 0 ) {

    // Make the first item all caps
    $( replacement ).text( $( replacement ).text().toUpperCase() );
  } else if ( index === 1 || index === 3 ) {

    // Delete the second and fourth items
    replacement = null;
  } else if ( index === 2 ) {

    // Make two of the third item and add some text
    replacement = [ replacement, $( "<li>" ).get( 0 ) ];
    $( replacement[ 0 ] ).append( "<b> - A</b>" );
    $( replacement[ 1 ] ).append( "Extra <b> - B</b>" );
  }

  // Replacement will be a dom element, null,
  // or an array of dom elements
  return replacement;
});
$( "#results" ).append( mappedItems );
