/*
DESCRIPTION:
This is a file that after installing a greasemonkey extension can
be used to convert youtube.com to any invidious instance.
NOTE: I might change this really often because instances may fail.

----

Copyright (C) 2022 snowcatridge10 and other contributors

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
// @name           Google to Searx
// @namespace      Snowcatridge10's userscripts
// @match          http://google.com/*
// @match          https://google.com/*
// @match          http://www.google.com/*
// @match          https://www.google.com/*
// @grant          none
// @run-at         document-start
// ==/UserScript==
SEARX_INSTANCE = "searx.org"

url = location.href
url = url.replace(/\bwww\.\b/, "")
// Search
// https://www.google.com/search?q=paris
// https://searx.org/search.php?q=test%20search
if (url.includes("search")){
  url = url.replace("google.com/search?q=",SEARX_INSTANCE+"/search?q=")
  location.href = url
}
else{
  url = url.replace("google.com/search?q=",SEARX_INSTANCE)
  location.href = url
}
