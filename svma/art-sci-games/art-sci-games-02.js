/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function(index) {
  var instanceName = 'p.instancename:contains("Level A")'
  var URL = 'li.modtype_url'
  var BOOK = 'li.modtype_book'
  var H5P = 'li.modtype_h5pactivity'

  // FIND ITEMS BASED ON CHARACTER SET
  var s = '123456789';
  for (var i = 0; i < s.length; i++) {
    if ($(URL).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0) {
      $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");
      $(this).first() {
        //-- 1. remove url overflow covering


        //-- 2. move module title and icons to new home
        let oldTitle = $(this).find(".snap-asset-link")
        let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
        // save the title, remove it, and add to new location
        oldTitle.remove();
        newTitle.append(oldTitle);
        var oldIcon = $(".snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img")
        var newIcon = $(".snap-asset-content .contentafterlink div.tile-completion")
        let oldIcon_URL = $(this).find(oldIcon)
        let newIconLocation = $(this).find(newIcon)
        oldIcon_URL.remove()
        newIconLocation.append(oldIcon_URL)
      };
    };
  };
});
