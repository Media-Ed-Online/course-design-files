/* ------------------
| TABLE OF CONTENTS  |
------------------ */
/*$("nav#course-toc h2").each(function() {
var text = $(this).text();
text = text.replace("Contents", "Levels");
$(this).text(text);
});*/



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




/* ------------------
| URL MODULE GROUP   |
------------------ */
$('li.modtype_url').each(function(index) {
  var URL = "li.modtype_url"
  var BOOK = "li.modtype_book"
  var H5P = "li.modtype_h5pactivity"

  // select only items titled Level...
  if ($("p:contains('Tutorial')").length) {

    //-- CHANGE THE URL MODTYPE TITLE
    $(this).each(function(index) {
      // variables
      let oldTitle = $(this).find(".snap-asset-link")
      let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
      // save the title, remove it, and add to new location
      oldTitle.remove();
      newTitle.append(oldTitle);
    });


  };
});
