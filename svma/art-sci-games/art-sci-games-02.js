/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function(index) {
  var list = {
    'Level A',
    'Level B',
  };

  $.each(list, function(index) {
      $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");
  });
});

/*  $(this).find('ul.topics li').each(function() {
    if ($(this).find('p.instancename:contains("Level A"), p.instancename:contains("Level B")').length > 0) {
      $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");
      $(this).closest(".modtype_url").each(function() {
        let oldTitle = $(this).find(".snap-asset-link")
        let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
        oldTitle.remove();
        newTitle.append(oldTitle);
      });
      $(this).find(".modtype_book").each(function() {
        var oldIcon = $(".snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img")
        var newIcon = ".snap-asset-content .contentafterlink div.tile-completion"
        $("li.modtype_url").find(newIcon).append(oldIcon)
      });
    } else {};
  });
});*/
