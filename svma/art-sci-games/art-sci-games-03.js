/* ------------------
| URL MODULE GROUP   |
------------------ */

$(document).ready(function(index) {
  var URL = 'li.modtype_url'
  var BOOK = 'li.modtype_book'
  var H5P = 'li.modtype_h5pactivity'

  // FIND ITEMS BASED ON CHARACTER SET
  var s = '1234567890';
  for (var i = 0; i < s.length; i++) {
    $(this).find(URL).add(BOOK).add(H5P).each(function() {
      if ($(this).find('p.instancename:contains("Level ' + s.charAt(i) + '")').length > 0) {
        $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");
      };
    });
  };
});


var mappedItems = $("li.activity").map(function(index) {
  var replacement = $("p.instancename").text($(this).text()).get(0);
  if (index === 0) {

    // Make the first item all caps
    $(replacement).text($(replacement).text().toUpperCase());
  }
  return replacement;
});
$("li.modtype_url .snap-asset-content .contentafterlink div.tile-completion").append(mappedItems);
