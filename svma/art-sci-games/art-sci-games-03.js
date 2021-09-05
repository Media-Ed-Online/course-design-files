/* ------------------
| URL MODULE GROUP   |
------------------ */

$(document).ready(function(index) {
  var URL = 'li.modtype_url'
  var BOOK = 'li.modtype_book'
  var H5P = 'li.modtype_h5pactivity'

  // FIND ITEMS BASED ON CHARACTER SET

    let urlContains = $(this).find('.modtype_url p.instancename').text();
    let bookContains = ($(this).find('.modtype_book p.instancename').text();
    if (urlContains == bookContains) {
      $(this).css("background","pink")
  };
});
