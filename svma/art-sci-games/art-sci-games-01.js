/* ------------------
| TABLE OF CONTENTS  |
 ------------------ */
$("nav#course-toc h2").each(function() {
    var text = $(this).text();
    text = text.replace("Contents", "Levels");
    $(this).text(text);
});



/* ------------------
| BACKGROUND         |
 ------------------ */
var $backgroundShapes = $( "<div class='bgShapes'><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>")

$( "#page" ).prepend( $backgroundShapes );
