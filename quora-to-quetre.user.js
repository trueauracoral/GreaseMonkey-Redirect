/*
DESCRIPTION: This is a file that after installing a greasemonkey
extension can be used to convert Quora to any Quetre instance.

----

Copyright (C) 2021 Zortazert and other contributors

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
// @name        Quora to Quetre
// @namespace   Zera's quora redirection script
// @match       https://quora.com/*
// @match       https://www.quora.com/*
// @match       http://quora.com/*
// @match       http://www.quora.com/*
// @run-at      document-start
// @grant       none
// ==/UserScript==
QUETRE_INSTANCE = "quetre.vern.cc"

url = location.href
url = url.replace(/\bwww\.\b/,"")
url = url.replace("quora.com",QUETRE_INSTANCE)
location.href = url
