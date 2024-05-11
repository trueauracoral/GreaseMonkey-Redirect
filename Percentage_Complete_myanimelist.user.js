// ==UserScript==
// @name        Percentage Complete myanimelist.net
// @namespace   Violentmonkey Scripts
// @match       https://myanimelist.net/anime/*
// @grant       none
// @version     1.0
// @author      TrueAuraCoral
// @description Started at 4/15/2024, 10:33:33 PM
// ==/UserScript==

// Parse
var episodeHTML = document.getElementsByClassName("di-ib form-user-episode ml8")[0].innerHTML;

var totalEpisodes = document.querySelector("span[id='curEps']").innerText;
var watchedEpisodes = document.getElementById("myinfo_watchedeps").value;
console.log(totalEpisodes);

// If it is an unfinished episode it goes to look at the discussion
// If there are high rated discussion about episodes and tries to find it there.
// Does not work everytime and doesn't suppport manga.
var estimate = false;
if (totalEpisodes == "?") {
  estimate = true;
  var discussionRows = document.querySelectorAll("tr[id^='topicRow']");

  var episodes = [];
  discussionRows.forEach(function(row) {
    var discussionColumns = row.querySelectorAll("td.forum_boardrow1");
    var discussionText = discussionColumns[0].innerText.toLowerCase();
    var episodeNumber = discussionText.match(/episode\s(\d+)/i)[1];
    episodes.push(parseInt(episodeNumber));
    console.log(episodeNumber);
  });

  console.log(episodes);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max#getting_the_maximum_element_of_an_array
  totalEpisodes = Math.max.apply(null, episodes);
  console.log(totalEpisodes);
}

var percent = Math.round((watchedEpisodes / totalEpisodes) * 100) + "%";
if (estimate) {
  percent = "~" + percent;
}

var parentElement = document.getElementsByClassName("user-status-block js-user-status-block fn-grey6 clearfix al mt8 po-r")[0];
var percentDiv = document.createElement("div");
percentDiv.className = "di-ib form-user-episode ml8";
percentDiv.innerText = "Percentage Complete: ";
var percentSpan = document.createElement("span");
percentSpan.id = "percentComplete";
percentSpan.innerText = percent;
percentDiv.appendChild(percentSpan);
parentElement.appendChild(percentDiv);
