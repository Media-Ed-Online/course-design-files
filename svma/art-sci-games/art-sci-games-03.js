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
    $(this).find(URL).add(BOOK).add(H5P).each(function() {

      var urlContains = $(this).find('li.modtype_url p.instancename:contains("Level ' + s.charAt(i) + '")')
      var bookContains = $(this).find('li.modtype_book p.instancename:contains("Level ' + s.charAt(i) + '")')
      if (urlContains == bookContains) {
        bookContains.remove()
        urlContains.remove()
      };
    });
  };
});
