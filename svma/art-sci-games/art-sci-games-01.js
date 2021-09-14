/* ------------------
| TABLE OF CONTENTS |
------------------ */
$("nav#course-toc h2").each(function() {
  var text = $(this).text();
  text = text.replace("Contents", "Worlds");
  $(this).text(text);
});
$("nav#course-toc h2 a.chapter-title + span.completionstatus").hide();


/* ------------------
| COLORS & BGs      |
------------------ */
// random color input
var colorPaletteOpts = ["#E94141", "#FC5A95", "#FFC80D", "#4CBD84", "#59D9D5", "#1A73D9"];
var colorPaletteRand = colorPaletteOpts[Math.floor(Math.random() * bgShapesColorOpts.length)];

/*$(document).ready(function() {
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
});*/



/* ------------------
| COMPLETION TRACK  |
------------------ */
/* Replaces tracking icons with custom */
$('img').each(function() {
  var curSrc = $(this).attr('src');
  // Progress Tracking: Incomplete
  if (curSrc === 'https://moodle.umt.edu/theme/image.php/snap/core/1630655779/i/completion-auto-n') {
    $(this).attr('src', 'https://media-ed-online.github.io/course-design-files/svma/art-sci-games/images/icon-incomplete.png');
  }
  // Progress Tracking: Complete
  if (curSrc === 'https://moodle.umt.edu/theme/image.php/snap/core/1630655779/i/completion-auto-y') {
    $(this).attr('src', 'https://media-ed-online.github.io/course-design-files/svma/art-sci-games/images/icon-complete-pass.png');
  }
  // Progress Tracking: Complete Alt
  if (curSrc === 'https://moodle.umt.edu/theme/image.php/snap/core/1630655779/i/completion-auto-pass') {
    $(this).attr('src', 'https://media-ed-online.github.io/course-design-files/svma/art-sci-games/images/icon-complete-pass.png');
  }
  // Progress Tracking: Incomplete
  if (curSrc === 'https://moodle.umt.edu/theme/image.php/snap/core/1630655779/i/completion-auto-fail') {
    $(this).attr('src', 'https://media-ed-online.github.io/course-design-files/svma/art-sci-games/images/icon-complete-fail.png');
  }
});
