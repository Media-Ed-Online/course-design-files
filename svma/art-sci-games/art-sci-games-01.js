/* ------------------
| TABLE OF CONTENTS  |
 ------------------ */
$("nav#course-toc h2").each(function() {
    var text = $(this).text();
    text = text.replace("Contents", "Levels");
    $(this).text(text);
});

var $backgroundCircles = $( "<ul class='circles'><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>")

$( "#moodle-page" ).append( $backgroundCircles );
$( "#moodle-page ul.circles" ).height($(document).height());
