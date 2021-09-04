/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function() {
  var lookedUp = {}

  $('p.instancename').parentsUntil('ul.section').each(function() {
    var text = $(this).text().trim();
    if (lookedUp[text]) {
      $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");

      //-- 2.1 move module title to new home
      $('li.modtype_url').each(function(index) {

        let oldTitle = $(this).find(".snap-asset-link")
        let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
        // save the title, remove it, and add to new location
        oldTitle.remove();
        newTitle.append(oldTitle);
      });
    } else {
      lookedUp[text] = true;
    }
  });
});
