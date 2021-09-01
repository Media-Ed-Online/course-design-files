/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function(index) {
  var tiles = ['Level A', 'Level B'];

  if ($('li.activity').find('p:contains("' + tiles + '")').length > 0) {
    $('.modtype_url').each(function(index) {
      let oldTitle = $(this).find(".snap-asset-link")
      let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
      oldTitle.remove();
      newTitle.append(oldTitle);
    });
  };
});
