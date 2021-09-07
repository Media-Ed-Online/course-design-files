/* ------------------
| URL MODULE GROUP   |
------------------ */
$('li.state-visible').ready(function(index) {
  var URL = 'li.modtype_url'
  var BOOK = 'li.modtype_book'
  var H5P = 'li.modtype_h5pactivity'

  // FIND ITEMS BASED ON CHARACTER SET
  var s = '123456789';
  for (var i = 0; i < s.length; i++) {

    // MOVE TITLE
    $(this).find(URL).each(function(index) {
      if ($(this).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0) {

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
      };
    });

    //-- MOVE ICONS
    $(this).each(function() {
      if ($(this).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0) {

        //-- 1. move first set of module icons to new home
        var oldIcon = $(".snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img")
        var newIcon = ".snap-asset-content .contentafterlink div.tile-completion"
        // find the first of each, add empty class to mark
        let oldIcon_URL = $(URL).first().find(oldIcon).addClass("moved")
        let oldIcon_BOOK = $(BOOK).first().addClass("moved").find(oldIcon)
        let oldIcon_H5P = $(H5P).first().addClass("moved").find(oldIcon)
        let newIconLocation = $(URL).first().addClass("moved").find(newIcon)
        // save the icons, remove them, and add to new location
        oldIcon_URL.add(oldIcon_BOOK).add(oldIcon_H5P).remove()
        newIconLocation.append(oldIcon_URL).append(oldIcon_BOOK).append(oldIcon_H5P);

        //-- 2. move next set of module icons to new home, repeat until finished
        $(this).each(function() {
          let oldIcon_URL = $("li.modtype_url:not(.moved)").first().find(oldIcon).addClass("moved")
          let oldIcon_BOOK = $("li.modtype_book:not(.moved)").first().addClass("moved").find(oldIcon)
          let oldIcon_H5P = $("li.modtype_h5pactivity:not(.moved)").first().addClass("moved").find(oldIcon)
          let newIconLocation = $("li.modtype_url:not(.moved)").first().addClass("moved").find(newIcon)
          // relocated all moved-targeted items to new location
          newIconLocation.append(oldIcon_URL).append(oldIcon_BOOK).append(oldIcon_H5P);
        });

        //-- 3. visually hide items from page (liked through URL)
        $(BOOK).add(H5P).each(function() {
          if ($(this).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0) {
            $(this).hide();
          };
        });

        //-- 4. Replace completion tracking icons
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
      };
    });
  };
});
