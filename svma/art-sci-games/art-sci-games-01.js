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

$(document).ready(function(index) {
  // Draw Shapes
  var $backgroundShapes = $("<div class='bgShapes'><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>")
  $("#page").prepend($backgroundShapes);
});
$("div.bgShapes span").each(function(index) {
  // Random BG Colors
  var bgShapesColorOpts = ["#ff0000", "blue", "gray"];
  var bgShapesColorRand = rand[Math.floor(Math.random() * bgShapesColorOpts.length)];
  console.log(bgShapesColorRand);
  $(this).css('background', bgShapesColorRand);
});



/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function(index) {
  var URL = "li.modtype_url"
  var BOOK = "li.modtype_book"
  var H5P = "li.modtype_h5pactivity"

  // select only items titled Gamififed...
  if ($(this).find("p.instancename:contains('Level')").length > 0) {

    //-- CHANGE THE URL MODTYPE TITLE
    $(URL).each(function(index) {
      // variables
      let oldTitle = $(this).find(".snap-asset-link")
      let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
      // save the title, remove it, and add to new location
      oldTitle.remove();
      newTitle.append(oldTitle);
    });

    //-- MOVE ICONS
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
      //next of each modtype, repeated
      setInterval(function() {
        // find the first non-targeted of each, add empty class to mark
        let oldIcon_URL = $("li.modtype_url:not(.moved)").first().find(oldIcon).addClass("moved")
        let oldIcon_BOOK = $("li.modtype_book:not(.moved)").first().addClass("moved").find(oldIcon)
        let oldIcon_H5P = $("li.modtype_h5pactivity:not(.moved)").first().addClass("moved").find(oldIcon)
        let newIconLocation = $("li.modtype_url:not(.moved)").first().addClass("moved").find(newIcon)
        // relocated all moved-targeted items to new location
        newIconLocation.append(oldIcon_URL).append(oldIcon_BOOK).append(oldIcon_H5P);
      });
    });

    //-- Styling Changes
    $(URL).each(function(index) {
      /// hide or remove additional unwanted asset styling
      $(this).find(".snap-assettype").css("height", "0px");
      $(this).find(".snap-header-card").css("display", "none");
      $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");
      $(this).find("p.snap-resource-card-fadeout").remove();
      $(this).find("body.snap-resource-card li.snap-resource.modtype_url").css("background-image: none;");
      // new style
      $(this).css({
        'height': 'auto',
        'background-image': 'none',
        'border': '1px solid #f1f1f1',
        'border-radius': '10px',
        'box-shadow': '0 14px 26px rgba(0,0,0,0.04)',
        'margin-top': '2em',
        'margin-bottom': '50px',
      });
      $(this).find("div.tile-title p.instancename").css({
        'font-family': '"Fredoka One"',
        'color': '#4C5656',
        'padding-right':'0px',
      });
    });
    $(BOOK).each(function() {
      $(this).hide();
    });
    $(H5P).each(function() {
      $(this).hide();
    });
    $(oldIcon).css({
      'width': '30px',
      'height': '30px',
      'font-size': '30px',
    });
  };
});
