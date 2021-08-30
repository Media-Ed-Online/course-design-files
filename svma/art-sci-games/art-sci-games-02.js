/* ------------------
| URL MODULE GROUP   |
------------------ */
/*$(document).ready(function(index) {
  var URL = $('li.modtype_url:contains("Level")');
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


function findElementByText(text) {
  var jSpot = $("p:contains(" + Level + ")")
    .filter(function() {
      $(URL).each(function(index) {
        // variables
        let oldTitle = $(this).find(".snap-asset-link")
        let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
        // save the title, remove it, and add to new location
        oldTitle.remove();
        newTitle.append(oldTitle);
      });
    })
    .parent(); // because you asked the parent of that element

  return jSpot;
}
