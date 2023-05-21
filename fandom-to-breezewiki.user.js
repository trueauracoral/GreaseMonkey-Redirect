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
// @name        Fandom to Breezewiki
// @namespace   Zera's breezewiki redirection script
// @version     1
// @grant       none
// @match       https://*.fandom.com/*
// @grant       none
// @run-at      document-start
// ==/UserScript==
BREEZEWIKI_INSTANCE = "antifandom.com"
//fetch('https://corsproxy.io/?https://docs.breezewiki.com/files/instances.json', {
//    method: 'GET',
//    headers: {
//        'Accept': 'application/json',
//    },
//})
//.then(response => response.json())
//.then((data) => {
//    let list = []
//    data.forEach(function (result) {
//        list.push(result.instance)
//    })
//});
//console.log(list)

url = location.href
url = url.replace(/\bwww\.\b/, "")
host = location.hostname
path = location.pathname
if (url.includes("/wiki/")) {
    // this is bad
    location.href = "https://" + BREEZEWIKI_INSTANCE + "/" + host.split(".")[0] + path
}
else {
    url = url.replace("fandom.com", BREEZEWIKI_ISNTANCE)
    location.href = url
}
