/* ------------------
| URL MODULE GROUP   |
------------------ */

/*$(document).ready(function(index) {
  $(this).find('ul.topics li li.modtype_url, ul.topics li li.modtype_book').each(function() {
    if ($(this).find('p.instancename:contains("Level A")').length > 0) {
      $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");
      $(this).closest(".modtype_url").each(function() {
        let oldTitle = $(this).find(".snap-asset-link")
        let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
        oldTitle.remove();
        newTitle.append(oldTitle);
      });

      var oldIcon = $(this).closest(".modtype_book").find(".snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img")
      var newIcon = $(this).closest(".modtype_book").find(".snap-asset-content .contentafterlink div.tile-completion")

    } else {};
  });
});*/

$(document).ready(function(index) {
  var instanceName = 'p.instancname:contains("Level A")'
  var URL = 'li.modtype_url'
  var BOOK = 'li.modtype_book'
  var H5P = 'li.modtype_h5pactivity'

  $(this).find(URL).add(BOOK).add(H5P).each(function() {
    if ($(this).find(instanceName).length > 0) {
      $(this).css("display", "none")
    };
  });
});
