//$('#region-main').prepend('<img src="https://video-public.canva.com/VADls-1PCW0/videos/e9ebf767df.gif" style="width: 200px; height: 200px; position: absolute; bottom: -100px; left: -100px;"/>');


$(document).ready(function(index) {
  $('li.modtype_label .activityinstance .snap-header-card').css("height", "0px");
  $('li.modtype_label .activityinstance .snap-assettype').css("height", "0px");
  $('li.modtype_label:first-of-type').contents().appendTo('#tab-container div.tab-content div#nav-first');
  $('li.modtype_label:nth-of-type(2)').contents().appendTo('#tab-container div.tab-content div#nav-second');
  $('li.modtype_label:nth-of-type(3)').contents().appendTo('#tab-container div.tab-content div#nav-third');
});


var $backgroundLines = $( "<div class='bg'></div><div class='bg bg2'></div><div class='bg bg3'></div>")

$( "#page" ).prepend( $backgroundLines );
//$( "body ul.circles" ).height($(document).height()).width($(document).width());
