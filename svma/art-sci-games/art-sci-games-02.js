/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function(index) {
  var instanceName = 'p.instancename:contains("Level A")'
  var URL = 'li.modtype_url'
  var BOOK = 'li.modtype_book'
  var H5P = 'li.modtype_h5pactivity'

  // FIND ITEMS BASED ON CHARACTER SET
  var s = '1,2,3,4,5,6,7,8,9,10';
  for (var i = 0; i < s.length; i++) {
    if ($(URL).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0).first() {
      //-- 1. remove url overflow covering
      $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");

      //-- 2.1 move module title to new home
      $(URL).each(function(index) {
        if ($(this).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0) {
          // variables
          let oldTitle = $(this).find(".snap-asset-link")
          let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
          // save the title, remove it, and add to new location
          oldTitle.remove();
          newTitle.append(oldTitle);


          //-- 2.2 move module icons to new home
          var oldIcon = $(".snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img")
          var newIcon = $(".snap-asset-content .contentafterlink div.tile-completion")
          let oldIcon_URL = $(this).find(oldIcon)
          let newIconLocation = $(this).find(newIcon)
          oldIcon_URL.remove()
          newIconLocation.append(oldIcon_URL)

          $(BOOK).first().each(function(index) {
            if ($(this).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0) {
              var oldIcon = ".snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img"
              var newIcon = "li.modtype_url .snap-asset-content .contentafterlink div.tile-completion"
              let oldIcon_URL = $(this).find(oldIcon)
              let newIconLocation = $(this).parent().first().find(newIcon)
              oldIcon_URL.remove()
              newIconLocation.append(oldIcon_URL)
            };
          });
        };
      });
    };
  };
});
