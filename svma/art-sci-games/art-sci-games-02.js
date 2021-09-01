/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function(index) {
  const tileTitles = ['Level A'];

  if ($('li.activity').find('p:contains("' + tileTitles + '")').length > 0) {
    $(this).find('.modtype_url').each(function(index) {
      let oldTitle = $(this).find(".snap-asset-link")
      let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
      oldTitle.remove();
      newTitle.append(oldTitle);
    });
  };
});
