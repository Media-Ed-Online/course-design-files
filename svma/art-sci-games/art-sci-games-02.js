/* ------------------
| URL MODULE GROUP   |
------------------ */

$(document).ready(function(index) {
  $(this).find('ul.topics li li.modtype_url, ul.topics li li.modtype_book').each(function() {
    if ($(this).find('p.instancename:contains("Level A")').length > 0) {
      $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");
      $(this).closest(".modtype_url").each(function() {
        let oldTitle = $(this).find(".snap-asset-link")
        let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
        oldTitle.remove();
        newTitle.append(oldTitle);
      });
      $(this).closest(".modtype_book").each(function() {
        var oldIcon = $(".snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img")
        var newIcon = ".snap-asset-content .contentafterlink div.tile-completion"
        $("li.modtype_url").find(newIcon).append(oldIcon)
      });
    } else {};
  });
});
