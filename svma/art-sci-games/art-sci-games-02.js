/* ------------------
| URL MODULE GROUP   |
------------------ */
/*$(document).ready(function(index) {
  const tileTitles = ["Level A", "Level B"];

  if ($('li.activity').find('p:contains("' + tileTitles + '")').length > 0) {
    $(this).find('.modtype_url').each(function(index) {
      let oldTitle = $(this).find(".snap-asset-link")
      let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
      oldTitle.remove();
      newTitle.append(oldTitle);
    });
    else {

    }
  };
});*/


var searchTerms = ["Level A", "Level B"];

$('li').filter(function() {
  $text = $(this).text();
  $.each(searchTerms, function (index, term) {
        found = $text.indexOf(term) > -1 ? found +1 : found;
    })
    return found;
}).css('background','pink');
