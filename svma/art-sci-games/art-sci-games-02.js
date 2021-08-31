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
  $("div").each(function() { //loop through the elements
    var elem = $(this); //reference to current
    var txt = $.trim(elem.text()); //get its text
    if (lookup[txt]) { //if we have had this text already, remove the element
      elem.filter(":contains('Level A')").css("background", "red");
      elem.filter(":contains('Level B')").css("background", "yellow")
    } else {
      lookup[txt] = true; //set the key in the lookup
    }
  });
}());
