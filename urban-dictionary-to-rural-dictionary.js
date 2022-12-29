// ==UserScript==
// @name        Urban Dictionary to Rural Dictionary
// @namespace   Zera's Urban Dictionary to Rural Dictionary
// @include     https://www.urbandictionary.com*
// @version     1
// @grant       none
// ==/UserScript==

var instance = "rd.vern.cc"

host = window.location.host
url = location.href
location.href = location.href.replace(window.location.host, instance)
