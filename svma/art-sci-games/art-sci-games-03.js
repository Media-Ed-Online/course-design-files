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

        var oldIcon = $(".snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img")
        var newIcon = $(".snap-asset-content .contentafterlink div.tile-completion")
        let oldIcon_URL = $(this).find(oldIcon)
        let newIconLocation = $(this).find(newIcon)
        oldIcon_URL.remove()
        newIconLocation.append(oldIcon_URL)
      });
    } else {
      lookedUp[text] = true;
    }
  });
});
