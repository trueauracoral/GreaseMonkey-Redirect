// ==UserScript==
// @name        Github Pages
// @namespace   Zera's Github Pages
// @match       https://github.com/*/*
// @match       https://*.github.io/*
// @version     1
// @grant       none
// ==/UserScript==

// Epic Key handler from:
// https://stackoverflow.com/questions/3168574/how-can-i-create-a-shortcut-for-firefox-in-greasemonkey
(function(){
document.addEventListener('keydown', function(e) {
  // pressed alt+g
  if (e.keyCode == 71 && !e.shiftKey && !e.ctrlKey && e.altKey && !e.metaKey) {
      url = window.location;
      path = url.pathname.split("/").filter(e => typeof e === 'string' && e != '');
      domain = url.host;
      if (domain.includes("github.io")) {
	  // This is not perfect. Apperently any repo on github can
	  // get turned into a github pages site. So without a path
	  // idk what that repo is... This is better than nothing.
	  redirect = `https://github.com/${domain.split(".")[0]}`
	  if (path[0] != undefined) {
	      window.location = redirect + `/${path[0]}`;
	  } else {
	      window.location = redirect;
	  }
      } else {
	window.location = `https://${path[0]}.github.io/${path[1]}`;
      }
  }
}, false);
})();
