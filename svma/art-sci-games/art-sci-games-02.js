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

    // URL ACTIVITIES
    $(this).find(URL).each(function(index) {
      if ($(this).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0) {

        //-- 1. remove url overflow covering
        $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");

        //-- 2. move module title to new home
        let oldTitle = $(this).find(".snap-asset-link")
        let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
        // save the title, remove it, and add to new location
        oldTitle.remove();
        newTitle.append(oldTitle);

        //-- 3. move module icons to new home
        let oldIcon = $(this).find(".snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img")
        let newIcon = $(this).find(".snap-asset-content .contentafterlink div.tile-completion")
        // save the icon, remove it, and add to new location
        oldIcon.remove()
        newIcon.append(oldIcon)
        oldIcon.addClass('moved')
      };
    });

    // BOOK ACTIVITIES
    $(this).find(BOOK).each(function(index) {
      if ($(this).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0) {

        //-- 1. move first module icons to new home
        

        //-- 2. loop through modules and their icons
        $(this).each(function(index) {
          if ($(this).find(BOOK).first()) {
            let oldIcon = $(BOOK).first().find(".snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img")
            let newIcon = $(this).parentsUntil('li.section').find("li.modtype_url .snap-asset-content .contentafterlink div.tile-completion").first()
            // save the icon, remove it, and add to new location
            oldIcon.remove()
            newIcon.append(oldIcon)
            oldIcon.addClass('moved')
            newIcon.addClass('moved')
          } else {

          };
          if ($(this).find(BOOK).next()) {
            let oldIcon = $(this).first().not('moved').find(".snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img").addClass('moved')
            let newIcon = $(this).parentsUntil('li.section').find("li.modtype_url .snap-asset-content .contentafterlink div.tile-completion:not('.moved')").first()
            // save the icon, remove it, and add to new location
            newIcon.append(oldIcon)
          } else {
            //
          };
        });
      };
    });
  };
});
