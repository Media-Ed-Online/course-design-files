/* ------------------
| TABLE OF CONTENTS  |
 ------------------ */
$("nav#course-toc h2").each(function() {
    var text = $(this).text();
    text = text.replace("Contents", "Levels");
    $(this).text(text);
});
//$("#moodle-page").prepend("<ul class="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>");

var $newdiv1 = $( "<ul class='circles'><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>")

$( "#moodle-page" ).prepend( $newdiv1 );
