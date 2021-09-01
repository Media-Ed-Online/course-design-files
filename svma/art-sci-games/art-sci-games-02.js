/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function(index) {

  $(this).find("li.section ul.section li.activity").each(function(index) {
    $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");
    if ($('li.activity').find('p:contains("Level A"), p:contains("Level B")').length > 0) {
      $(this).find('.modtype_url').each(function(index) {
        let oldTitle = $(this).find(".snap-asset-link")
        let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
        oldTitle.remove();
        newTitle.append(oldTitle);
      });
      else {
        //do nothing
      }
    };
  });
});
