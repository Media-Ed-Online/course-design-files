/* ------------------
| URL MODULE GROUP   |
------------------ */
/*$(document).ready(function(index) {
  var URL = $('li.modtype_url:contains("Level" + B)');
  var BOOK = $('li.modtype_book:contains(textTitle)');
  var H5P = $('li.modtype_h5pactivity:contains(textTitle)');

  $(URL).each(function(index) {
    // variables
    let oldTitle = $(this).find(".snap-asset-link")
    let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
    // save the title, remove it, and add to new location
    oldTitle.remove();
    newTitle.append(oldTitle);
  });
});*/

$(document).ready(function() {
  var lookup = {}; //store text here

  $("li.snap-asset .snap-asset-link").each(function() { //loop through the elements
    var elem = $(this); //reference to current
    var txt = $.trim(elem.text()); //get its text
    var URL = "li.modtype_url"
    var BOOK = "li.modtype_book"
    var H5P = "li.modtype_h5pactivity"
    if (lookup[txt]) {
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
    } else {
      lookup[txt] = true; //set the key in the lookup
    }
  });
}());
