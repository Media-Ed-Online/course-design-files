/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function(index) {
  var instanceName = 'p.instancename:contains("Level A")'
  var URL = 'li.modtype_url'
  var BOOK = 'li.modtype_book'
  var H5P = 'li.modtype_h5pactivity'

  // FIND ITEMS BASED ON CHARACTER SET
  var s = 'ABCDE';
  for (var i = 0; i < s.length; i++) {
    $(this).find(URL).add(BOOK).add(H5P).each(function() {
      if ($(this).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0) {

        //-- 1. remove url overflow covering
        $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");

        //-- 2. move module title to new home
        $(URL).each(function(index) {
          // variables
          let oldTitle = $(this).find(".snap-asset-link")
          let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
          // save the title, remove it, and add to new location
          oldTitle.remove();
          newTitle.append(oldTitle);
        });

        //3. -- move icons beneath new title home
        $(this).each(function(index) {
          var oldIcon = $(".snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img")
          var newIcon = ".snap-asset-content .contentafterlink div.tile-completion"
          $(this).closest(BOOK).css("background", "pinks")
        });
        /*$(this).each(function(index) {
          var oldIcon = $(".snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img")
          var newIcon = ".snap-asset-content .contentafterlink div.tile-completion"
          $(this).each(function() {
            // find the first of each, add empty class to mark
            let oldIcon_URL = $(URL).find(oldIcon).addClass("moved")
            let oldIcon_BOOK = $(BOOK).addClass("moved").find(oldIcon)
            let oldIcon_H5P = $(H5P).addClass("moved").find(oldIcon)
            let newIconLocation = $(URL).addClass("moved").find(newIcon)
            newIconLocation.append(oldIcon_URL).append(oldIcon_H5P).append(oldIcon_BOOK);
          });
        });*/
      };
    });
  };
});
