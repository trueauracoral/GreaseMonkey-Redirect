// ==UserScript==
// @name         Youtube Distraction Blocker
// @namespace    https://youtube.com/
// @version      1.1
// @description  Blocks distractions on youtube for a more wholesome viewing experience.
// @author       Simon
// @match        https://*.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function(){

    var related = document.getElementById("related");
    if(related != null)
       related.parentElement.removeChild(related);

    var info = document.getElementById("info");
    if(info != null)
        info.parentElement.removeChild(info);

    document.getElementsByClassName('style-scope ytd-rich-grid-renderer')[0].remove()
    //var comments = document.getElementById("comments");
    //if(comments != null)
        //comments.parentElement.removeChild(comments);

    //var container = document.getElementById("container");
    //if(container != null)
        //container.parentElement.removeChild(container);
    //var sidebar = document.getElementById("guide-inner-content");
    //if(sidebar != null)
        //sidebar.parentElement.removeChild(sidebar);
    //var meta = document.getElementById("meta");
    //if(meta != null)
        //meta.parentElement.removeChild(meta);
                           }, 1000);
})();
