/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function(index) {
  var URL = $('li.modtype_url:contains("Tutorial","Syllabus")');
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
