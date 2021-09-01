/* ------------------
| URL MODULE GROUP   |
------------------ */
jQuery.expr[':'].mcontains = function(obj, index, meta, stack){
    result = false;
    theList = meta[3].split("','");

    var contents = (obj.textContent || obj.innerText || jQuery(obj).text() || '')

    for (x=0;x<theList.length;x++) {
        if (contents.indexOf(theList[x]) >= 0) {
            return true;
        }
    }

    return false;
};

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
$("li:mcontains('Level A','Level B')").css("color","red")
