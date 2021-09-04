/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function() {
  var lookedUp = {}

  $('p.instancename').each(function() {
    var text = $(this).text().trim();
    if (lookedUp[text]) {
      $(this).css("background","pink")
      $('li.modtype_book').each(function(index) {

          var oldIcon = ".snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img"
          var newIcon = "li.modtype_url .snap-asset-content .contentafterlink div.tile-completion"
          let oldIcon_URL = $(this).find(oldIcon)
          let newIconLocation = $(this).parent().find(newIcon)
          oldIcon_URL.remove()
          newIconLocation.append(oldIcon_URL)
        });
    } else {
      lookedUp[text] = true;
    }
  });
});
