/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function(index) {

  $(this).find('ul.section li.activity').each(function() {
    if ($(this).find('p.instancename:contains("Level A")').length > 0) {
      $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");
      $('.modtype_url').each(function(index) {
        let oldTitle = $(this).find(".snap-asset-link")
        let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
        oldTitle.remove();
        newTitle.append(oldTitle);
      });
    };
  });
});
