/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function(index) {
  $(this).find('ul.topics li').each(function() {
    $(this).find('li.activity').each(function() {
      if ($(this).find('p.instancename:contains("Level A"), p.instancename:contains("Level B")').length > 0) {

        $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");

        $(this).find('.modtype_url').each(function(index) {
          // variables
          let oldTitle = $(this).find(".snap-asset-link")
          let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
          // save the title, remove it, and add to new location
          oldTitle.remove();
          newTitle.append(oldTitle);
        });
      };
      else {

      };
    });
  });
});
