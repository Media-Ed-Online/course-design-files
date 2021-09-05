/* ------------------
| URL MODULE GROUP   |
------------------ */

var MY_SELECTOR = ".modtype_url" // Could be any selector

var observer = new MutationObserver(function(mutations){
  for (var i=0; i < mutations.length; i++){
    for (var j=0; j < mutations[i].addedNodes.length; j++){
      // We're iterating through _all_ the elements as the parser parses them,
      // deciding if they're the one we're looking for.
      if (mutations[i].addedNodes[j].matches(MY_SELECTOR)){
        $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");

        // We found our element, we're done:
        observer.disconnect();
      };
    }
  }
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});
