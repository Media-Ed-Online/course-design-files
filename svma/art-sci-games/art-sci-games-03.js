/* ------------------
| URL MODULE GROUP   |
------------------ */

$(document).ready(function(index) {
  var URL = 'li.modtype_url'
  var BOOK = 'li.modtype_book'
  var H5P = 'li.modtype_h5pactivity'

  // FIND ITEMS BASED ON CHARACTER SET
  var s = 'ABCDE';
  for (var i = 0; i < s.length; i++) {
    var urlContains = $(ULR).find('p.instancename:contains("Level ' + s.charAt(i) + '")');
    var bookContains = $(BOOK).find('p.instancename:contains("Level ' + s.charAt(i) + '")');
    if ($('urlContains').add('bookContains').length > 0) {
      $(this).css("background","pink")
  };
});
