/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function() {
  var lookedUp = {}

  $('p.instancename').each(function() {
    var text = $(this).text().trim();
    if (lookedUp[text]) {
      $(this).parentsUntil('li.modtype_url').find(".snap-asset-content .no-overflow").removeClass("no-overflow");
      $(this).parentsUntil('li.activity').each(function(index) {
        let oldIcon_URL = $('li.modtype_url').first().find(oldIcon).addClass("moved")
        let oldIcon_BOOK = $('li.modtype_book').first().addClass("moved").find(oldIcon)
        let oldIcon_H5P = $('li.modtype_h5pactivity').first().addClass("moved").find(oldIcon)
        let newIconLocation = $('li.modtype_url').first().addClass("moved").find(newIcon)
        // relocated all moved-targeted items to new location
        newIconLocation.append(oldIcon_URL).append(oldIcon_H5P).append(oldIcon_BOOK);
        });
    } else {
      lookedUp[text] = true;
    }
  });
});
