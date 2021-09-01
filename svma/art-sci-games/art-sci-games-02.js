/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function(index) {

  $(this).find('ul.topics li').each(function() {
    $(this).find('li.activity').each(function() {
      if ($(this).find('p.instancename:contains("Level A")').length > 0) {

        $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");

        $(this).find("li.modtype_url").each(function(index) {
          let oldTitle = $(this).find(".snap-asset-link")
          let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
          oldTitle.remove();
          newTitle.append(oldTitle);
        });

        $('li.modtype_book, li.modtype_h5pactivity').each(function() {
          var oldIcon = $(".snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img")
          var newIcon = ".snap-asset-content .contentafterlink div.tile-completion"
          $("li.modtype_url").find(newIcon).append(oldIcon_URL);
          /*$(this).each(function() {
            let oldIcon_URL = $('li.modtype_url').first().find(oldIcon).addClass("moved")
            let oldIcon_BOOK = $('li.modtype_book').first().addClass("moved").find(oldIcon)
            let oldIcon_H5P = $('li.modtype_h5pactivity').first().addClass("moved").find(oldIcon)
            let newIconLocation = $('li.modtype_url').first().addClass("moved").find(newIcon)
            newIconLocation.append(oldIcon_URL).append(oldIcon_BOOK).append(oldIcon_H5P);
          });*/
        });
      };
    });
  });
});
