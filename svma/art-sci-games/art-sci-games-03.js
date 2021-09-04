/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function() {
  var lookedUp = {}

  $('p.instancename').each(function() {
    var text = $(this).text().trim();
    if (lookedUp[text]) {
      $(this).parentsUntil('li.activity').find(".snap-asset-content .no-overflow").removeClass("no-overflow");

    } else {
      lookedUp[text] = true;
    }
  });
});
