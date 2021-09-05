/* ------------------
| URL MODULE GROUP   |
------------------ */

$(window).load(function(index) {
  if ($('ul.topics li.section').hasClass('state-visible')) {
    $('li.modtype_url').find(".snap-asset-content .no-overflow").removeClass("no-overflow");
  }
});
