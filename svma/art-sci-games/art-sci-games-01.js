/* ------------------
| TABLE OF CONTENTS  |
 ------------------ */
$("nav#course-toc h2").each(function() {
    var text = $(this).text();
    text = text.replace("Contents", "Levels");
    $(this).text(text);
});

var $backgroundCircles = $( "<div class='circles'><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></div>")

$( "#page" ).prepend( $backgroundCircles );
