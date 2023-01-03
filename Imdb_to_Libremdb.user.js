// ==UserScript==
// @name        Imdb to Libremdb
// @namespace   Zera's Imdb to Libremdb
// @version     1
// @grant       none
// @include     https://www.imdb.com/*
// ==/UserScript==

var instance = "libremdb.iket.me"

var host = window.location.host
var url = location.href
location.href = location.href.replace(window.location.host, instance)
