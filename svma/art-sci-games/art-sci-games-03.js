/* ------------------
| URL MODULE GROUP   |
------------------ */

$(document).ready(function(index) {
  if ($('li').hasClass('state-visible')) {
    $(this).each(function(index) {
      $('li.modtype_url').find(".snap-asset-content .no-overflow").removeClass("no-overflow");
    });
  },
  else {}
});
