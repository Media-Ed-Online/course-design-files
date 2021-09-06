/* ------------------
| URL MODULE GROUP   |
------------------ */

$(document).ready(function(index) {
  var URL = 'li.modtype_url'
  var BOOK = 'li.modtype_book'
  var H5P = 'li.modtype_h5pactivity'

  // FIND ITEMS BASED ON CHARACTER SET

  var h5pContains = $(this).find('li.modtype_h5p p.instancename')
  var bookContains = $(this).find('li.modtype_book p.instancename')

  if ($(h5pContains).text().trim() === $(bookContains).text().trim()) {
    console.log("Content is the same");
  } else {
    $(this).parentsUntil('li').css("background","yellow")
  }
});
