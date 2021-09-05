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
    let urlContains = ($(URL).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0);
    let bookContains = ($(BOOK).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0);
    let h5pContains = ($(H5P).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0);
    if (urlContains == bookContains == h5pContains) {
      $(this).css("background","pink")
  };
});
