/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function(index) {

  $(this).find('ul.topics li').each(function() {
    $(this).find('li.activity').each(function() {
      if ($(this).find('p.instancename:contains("Level A"),p.instancename:contains("Level B")').length > 0) {

        $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");

        $(this).find("li.modtype_url").each(function(index) {
          let oldTitle = $(this).find(".snap-asset-link")
          let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
          oldTitle.remove();
          newTitle.append(oldTitle);

          var oldIcon = $(".snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img")
          var newIcon = ".snap-asset-content .contentafterlink div.tile-completion"
          // first of set
          $(this).each(function() {
            // find the first of each, add empty class to mark
            let oldIcon_URL = $(URL).first().find(oldIcon).addClass("moved")
            let oldIcon_BOOK = $(BOOK).first().addClass("moved").find(oldIcon)
            let oldIcon_H5P = $(H5P).first().addClass("moved").find(oldIcon)
            let newIconLocation = $(URL).first().addClass("moved").find(newIcon)
            // relocated all moved-targeted items to new location
            newIconLocation.append(oldIcon_URL).append(oldIcon_H5P).append(oldIcon_BOOK);
          });
        });
      };
    });
  });
});
