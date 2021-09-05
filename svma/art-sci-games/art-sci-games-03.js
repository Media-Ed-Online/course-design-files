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
    var urlContains = ($(this).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0);
    var bookContains = ($(this).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0);
    if (urlContains == bookContains) {
      $(this).css("background","pink")
  };
});
