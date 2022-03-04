/*
DESCRIPTION: This is a file that after installing a greasemonkey
extension can be used to convert Medium blogs to a Scribe link.

----

Copyright (C) 2021 Vertbyqb and other contributors

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
// @name           Medium to Scribe
// @namespace      Vertbyqb's userscripts
// @include        *medium.com*
// @include        *codeburst.io*
// @include        *uxdesign.cc*
// @grant          none
// @run-at         document-start
// ==/UserScript==

// This works **best** for medium search results. Sort of works for
// the medium homepage.  With in the instances array you can add
// support for more medium websites. Also add another @include tag.

url = location.href
url = url.replace(/\bwww\.\b/, "")
segment = url.split('/')
const instances = ["medium.com", "codeburst.io", "uxdesign.cc"]
if (instances.includes(segment[2])){
  console.log("cowboy")
  url = "https://scribe.rip/" + segment[3] + "/" + segment[4]
  location.href = url
}
