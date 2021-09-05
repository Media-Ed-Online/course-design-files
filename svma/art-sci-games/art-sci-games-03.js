/* ------------------
| URL MODULE GROUP   |
------------------ */

$('li').hassClass('state-visible').each(function(index) {
  $('li.modtype_url').find(".snap-asset-content .no-overflow").removeClass("no-overflow");
});
