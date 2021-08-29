/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function(index) {
  var URL = $('li.modtype_url p.instancename:contains("Tutorial")');
  var BOOK = $('li.modtype_book:contains(textTitle)');
  var H5P = $('li.modtype_h5pactivity:contains(textTitle)');
  var findText = $('li p.instancename:contains("Tutorial")');

  $('li.modtype_rul p.instancename:contains("Tutorial")').css("background","red")

  if ($(this).find(findText).length > 0) {


    $(this).find(URL).each(function(index) {
      // variables
      let oldTitle = $(this).find(".snap-asset-link")
      let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
      // save the title, remove it, and add to new location
      oldTitle.remove();
      newTitle.append(oldTitle);
    });
  );
});
