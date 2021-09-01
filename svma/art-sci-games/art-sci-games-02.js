/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function(index) {

  // select only items titled Level...
  if ($(this).find('p.instancename:contains("Syllabus")').length > 0) {

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
