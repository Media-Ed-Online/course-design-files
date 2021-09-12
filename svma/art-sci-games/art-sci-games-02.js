/* ------------------
| URL MODULE GROUP   |
------------------ */
$('ul.topics li').each(function(index) {
  var URL = 'li.modtype_url'
  var BOOK = 'li.modtype_book'
  var H5P = 'li.modtype_h5pactivity'

  // FIND ITEMS BASED ON CHARACTER SET
  var s = '123456789';
  for (var i = 0; i < s.length; i++) {

    // MOVE TITLE
    $(this).find(URL).each(function(index) {
      if ($(this).find('p.instancename:contains("Level ' + s.charAt(i) + '"),p.instancename:contains("Boss")').length > 0) {

        //-- 1. remove url overflow mask + other covers
        $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");
        $(this).find(".snap-assettype").css("height", "0px");
        $(this).find(".snap-header-card").css("display", "none");
        $(this).find("p.snap-resource-card-fadeout").remove();
        $(this).find("body.snap-resource-card li.snap-resource.modtype_url").css("background-image: none;");

        //-- 2. move module title to new home
        let oldTitle = $(this).find(".snap-asset-link")
        let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
        // save the title, remove it, and add to new location
        oldTitle.remove();
        newTitle.append(oldTitle);

        // -- 3. styling
        $(this).filter(":odd").css({
            'transform': 'translateY(-5px) scale(1.005) translateZ(0) rotate(5deg)',
            'box-shadow': '0 24px 36px rgba(0,0,0,0.11), 0 24px 46px rgba(255, 215, 97, 0.48)',
        });
      };
    });

    //-- MOVE ICONS
    $(URL).each(function() {
      if ($(this).find('p.instancename:contains("Level ' + s.charAt(i) + '"),p.instancename:contains("Boss")').length > 0) {

        //-- 1. move first set of module icons to new home
        var oldIcon = $(".snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img")
        var newIcon = ".snap-asset-content .contentafterlink div.tile-completion"
        // find the first of each, add empty class to mark
        let oldIcon_URL = $(this).first().find(oldIcon).addClass("moved")
        let oldIcon_BOOK = $(this).parent().find(BOOK).first().addClass("moved").find(oldIcon)
        let oldIcon_H5P = $(this).parent().find(H5P).first().addClass("moved").find(oldIcon)
        let newIconLocation = $(this).first().addClass("moved").find(newIcon)
        // save the icons, remove them, and add to new location
        oldIcon_URL.add(oldIcon_BOOK).add(oldIcon_H5P).remove()
        newIconLocation.append(oldIcon_URL).append(oldIcon_BOOK).append(oldIcon_H5P);

        //-- 2. move next set of module icons to new home, repeat until finished
        $(this).each(function() {
          let oldIcon_URL = $(this).parent().find("li.modtype_url:not(.moved)").first().find(oldIcon).addClass("moved")
          let oldIcon_BOOK = $(this).parent().find("li.modtype_book:not(.moved)").first().addClass("moved").find(oldIcon)
          let oldIcon_H5P = $(this).parent().find("li.modtype_h5pactivity:not(.moved)").first().addClass("moved").find(oldIcon)
          let newIconLocation = $(this).parent().find("li.modtype_url:not(.moved)").first().addClass("moved").find(newIcon)
          // relocated all moved-targeted items to new location
          newIconLocation.append(oldIcon_URL).append(oldIcon_BOOK).append(oldIcon_H5P);
        });

        //-- 3. visually hide items from page (linked through URL)
        $(BOOK).add(H5P).each(function() {
          if ($(this).find('p.instancename:contains("Level ' + s.charAt(i) + '"),p.instancename:contains("Boss")').length > 0) {
            $(this).hide();
          };
        });
      };
    });
  };
});



/* ------------------
| COMPLETION TRACK  |
------------------ */
/* Replaces tracking icons with custom */
$('img').each(function() {
  var curSrc = $(this).attr('src');
  // Progress Tracking: Incomplete
  if (curSrc === 'https://moodle.umt.edu/theme/image.php/snap/core/1630655779/i/completion-auto-n') {
    $(this).attr('src', 'https://media-ed-online.github.io/course-design-files/svma/art-sci-games/images/icon-incomplete.png');
  }
  // Progress Tracking: Complete
  if (curSrc === 'https://moodle.umt.edu/theme/image.php/snap/core/1630655779/i/completion-auto-y') {
    $(this).attr('src', 'https://media-ed-online.github.io/course-design-files/svma/art-sci-games/images/icon-complete-pass.png');
  }
  // Progress Tracking: Complete Alt
  if (curSrc === 'https://moodle.umt.edu/theme/image.php/snap/core/1630655779/i/completion-auto-pass') {
    $(this).attr('src', 'https://media-ed-online.github.io/course-design-files/svma/art-sci-games/images/icon-complete-pass.png');
  }
  // Progress Tracking: Incomplete
  if (curSrc === 'https://moodle.umt.edu/theme/image.php/snap/core/1630655779/i/completion-auto-fail') {
    $(this).attr('src', 'https://media-ed-online.github.io/course-design-files/svma/art-sci-games/images/icon-complete-fail.png');
  }
});
