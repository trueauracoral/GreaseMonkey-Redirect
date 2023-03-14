// ==UserScript==
// @name        Deviant Art Age Bypass
// @namespace   Zera's Deviant Art Age bypasser
// @include     *deviantart.com*
// @version     1
// @grant       none
// ==/UserScript==

console.log('https://corsproxy.io/?https://backend.deviantart.com/oembed?url='+window.location.href)
console.log("Hello")
fetch('https://corsproxy.io/?https://backend.deviantart.com/oembed?url='+window.location.href)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonResponse) {
      console.log(jsonResponse)
      date = new Date(jsonResponse.pubdate)
      stats = jsonResponse.community.statistics["_attributes"]
      document.getElementById("root").innerHTML =
`<h1>${jsonResponse.title}</h1>
<a href="${jsonResponse.author_url}">By: ${jsonResponse.author_name}</a>
<h2>Created on: ${date.toLocaleString('default', { month: 'long'})}, ${date.getDate()}, ${date.getFullYear()}</h2>
<h2>${stats.views} ${String.fromCodePoint(0x1F440)}, ${stats.favorites} ${String.fromCodePoint(0x2665)}, ${stats.comments} ${String.fromCodePoint(0x1F4AC)}, ${stats.downloads} ${String.fromCodePoint(0x2B07)}</h2>
<h2>${jsonResponse.tags}</h2>
<br>
<img src="${jsonResponse.url}">
`;
      //document.getElementById("root").innerHTML = html
  });
