/* ------------------
| TABLE OF CONTENTS  |
------------------ */
$("nav#course-toc h2").each(function() {
  var text = $(this).text();
  text = text.replace("Contents", "Worlds");
  $(this).text(text);
});



/* ------------------
| BACKGROUND         |
------------------ */
$(document).ready(function() {
  // Draw Shapes
  var $backgroundShapes = $("<div class='bgShapes'><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>")
  $("#page").prepend($backgroundShapes);

  $("div.bgShapes span").each(function() {
    // Random BG Colors
    var bgShapesColorOpts = ["#DF3D9B", "#FDC273", "#0573CD"];
    var bgShapesColorRand = bgShapesColorOpts[Math.floor(Math.random() * bgShapesColorOpts.length)];
    console.log(bgShapesColorRand);
    $(this).css('background', bgShapesColorRand);
  });
});
