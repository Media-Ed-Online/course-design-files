/* ------------------
| URL MODULE GROUP   |
------------------ */
$(document).ready(function() {
   var lookedUp = {}

   $('ul.section').each(function() {
      var text = $(this).text().trim();
      if (lookedUp[text]) {
         $(this).css("background","yellow")
      } else {
         lookedUp[text] = true;
      }
   });
});
