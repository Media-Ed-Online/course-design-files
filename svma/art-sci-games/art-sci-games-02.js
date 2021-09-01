/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function(index) {


  $(this).find("li.section ul.section").each(function(index) {
    if ($(this).find('li p.instancename:contains("Level A")').length > 0) {
      $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");
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
