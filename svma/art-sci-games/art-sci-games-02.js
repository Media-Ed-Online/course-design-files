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
$('li.modtype_url:contains("tutorial"), li.modtype_book:contains("tutorial")').each(function(index) {

  var URL = "li.modtype_url"
  var BOOK = "li.modtype_book"
  var H5P = "li.modtype_h5pactivity"

  
  // variables
  let oldTitle = $(this).find(".snap-asset-link")
  let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
  // save the title, remove it, and add to new location
  oldTitle.remove();
  newTitle.append(oldTitle);

  $(this).each(function() {
    var oldIcon = $(".snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img")
    var newIcon = ".snap-asset-content .contentafterlink div.tile-completion"
    // first of set
    $(this).each(function() {
      // find the first of each, add empty class to mark
      let oldIcon_URL = $(URL).first().find(oldIcon).addClass("moved")
      let oldIcon_BOOK = $(BOOK).first().addClass("moved").find(oldIcon)
      let oldIcon_H5P = $(H5P).first().addClass("moved").find(oldIcon)
      let newIconLocation = $(URL).first().addClass("moved").find(newIcon)
      // relocated all moved-targeted items to new location
      newIconLocation.append(oldIcon_URL).append(oldIcon_H5P).append(oldIcon_BOOK);
    });
});
