/* ------------------
| URL MODULE GROUP   |
------------------ */

$(document).ready(function(index) {
  var URL = 'li.modtype_url'
  var BOOK = 'li.modtype_book'
  var H5P = 'li.modtype_h5pactivity'

  // FIND ITEMS BASED ON CHARACTER SET

  let urlContains = $(this).find('li.modtype_url p.instancename')
  let bookContains = $(this).find('li.modtype_book p.instancename')
  if (urlContains == bookContains) {
    $(this)find('div').css("background", "pink")
  };
});
