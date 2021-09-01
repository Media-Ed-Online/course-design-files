/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function(index) {

  $(this).find('li.section > ul.section').each(function() {
    if ($(this).find('p.instancename:contains("Level A")').length > 0) {

      //-- CHANGE THE URL MODTYPE TITLE
      $(URL).each(function(index) {
        // variables
        let oldTitle = $(this).find(".snap-asset-link")
        let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
        // save the title, remove it, and add to new location
        oldTitle.remove();
        newTitle.append(oldTitle);
      });
    };
  });
});
