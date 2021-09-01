/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function(index) {
  $(this).find('ul.topics li').each(function() {
    $(this).find('li.activity').each(function() {
      if ($(this).find('p.instancename:contains("Level A"), p.instancename:contains("Level B")').length > 0) {

        $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");

        $(this).find("li.modtype_url").each(function(index) {
          let oldTitle = $(this).find(".snap-asset-link")
          let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
          oldTitle.remove();
          newTitle.append(oldTitle);
        });
      };
    });
  });
});
