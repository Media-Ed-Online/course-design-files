/* ------------------
| URL MODULE GROUP   |
------------------ */

$(document).ready(function(index) {
  var URL = 'li.modtype_url'
  var BOOK = 'li.modtype_book'
  var H5P = 'li.modtype_h5pactivity'

  // FIND ITEMS BASED ON CHARACTER SET
  var s = '1 2 3';
  for (var i = 0; i < s.length; i++).each(function() {
      if ($(this).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0) {
        $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");

        //BOOK ICONS
        $(this).each(function(index) {
            var oldIcon = "li.modtype_book .snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img"
            var newIcon = "li.modtype_url .snap-asset-content .contentafterlink div.tile-completion"
            let oldIcon_URL = $(this).find(oldIcon)
            let newIconLocation = $(this).find(newIcon)
            oldIcon_URL.remove()
            newIconLocation.append(oldIcon_URL)
          };
        });
    };
  });
});
