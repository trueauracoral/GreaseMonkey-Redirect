/*
DESCRIPTION:
This is a file that after installing a greasemonkey extension can
be used to convert youtube.com to any invidious instance.
NOTE: I might change this really often because instances may fail.

----

Copyright (C) 2021 ZortaZert and other contributors

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or (at
your option) any later version.

This program is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

// ==UserScript==
// @name        GoodReads to BiblioReads
// @namespace   Zera's GoodReads to BiblioReads
// @include     *goodreads.com*
// @version     1
// @grant       none
// ==/UserScript==

// .ml domain big sketchy
BIBLIOREADS_INSTANCE = "biblioreads.ml";

url = location.href.replace(/\bwww\.\b/, "");
path = location.pathname;
regex_endpoints = ["/book/show*", "/work/quotes*", "/book/(.+?)/questions*", "/series*", "/author/show/(.+?)", "/quotes/tag/*"];

console.log(path);
regex_endpoints.forEach(function (regex) {
    re = new RegExp(regex, "g");
    if (location.pathname.match(re) != null) {
	window.location = ("https://"+BIBLIOREADS_INSTANCE+path);
    }
})
