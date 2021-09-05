/* ------------------
| URL MODULE GROUP   |
------------------ */

if (!window.HashChangeEvent)(function() {
  var lastURL = document.URL;
  window.addEventListener("hashchange", function(event) {
    $('li.modtype_url').find(".snap-asset-content .no-overflow").removeClass("no-overflow");
  });
}());
