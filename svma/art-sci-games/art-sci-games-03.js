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
      if ($(this).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0).each(function() {
        let a = $('li.modtype_url p.instancename').contents()
        let b = $('li.modtype_book p.instancename').contents()

        if (a == b) {
          $('p').css("background", "pink");
        }
      });
    });
  };
});
