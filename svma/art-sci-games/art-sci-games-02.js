/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function(index) {
  var textTitle = $("Tutorial")
  var URL = $('li.modtype_url:contains(textTitle)');
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
});
