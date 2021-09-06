/* ------------------
| URL MODULE GROUP   |
------------------ */

$(document).ready(function(index) {
  var URL = 'li.modtype_url'
  var BOOK = 'li.modtype_book'
  var H5P = 'li.modtype_h5pactivity'

  // FIND ITEMS BASED ON CHARACTER SET

  var urlContains = $(this).find('li.modtype_url p.instancename')
  var bookContains = $(this).find('li.modtype_book p.instancename')
  if (urlContains == bookContains) {
    bookContains.remove()
    urlContains.remo
  };

  var $a = $(this).find('li.modtype_url p.instancename').text()
  var $b = $(this).find('li.modtype_book p.instancename').text()
  if ($a.split(" ")[0] == $b.split(" ")[0]) {
    $(this).remove()
  }
});
