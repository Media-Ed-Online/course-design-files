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
    $(this).find(URL).each(function() {
      if ($(this).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0) {

        //-- 1. remove url overflow covering
        $(this).first().find(".snap-asset-content .no-overflow").removeClass("no-overflow");
        $(this).next().find(".snap-asset-content").css("background", "pink")

      };
    });
  };
});
