# GreaseMonkey-Redirect

This is a collection of user created GreaseMonkey scripts that will convert privacy disrespecting websites to FOSS/Libre alternatives.

## Why?
There are many awfule websites on the internet. That's why there have been many projects that allow us to still make use of them but in a more privacy respecting way.

## Projects
Nitter a alternative to Twitter.

<https://github.com/zedeus/nitter> Please disable all javascript when visiting this site.

Invidious a alternative to youtube.

<https://github.com/iv-org/invidious>  Please disable all javascript when visiting this site.

Teddit is a alternative to reddit.

<https://codeberg.org/teddit/teddit> This one you don't have to disable javascript.

Librarian is a alternative to odysee.

<https://librarian.bcow.xyz> This one you don't have to disable javascript.

## Scripts here?
These aim to acheive what something like privacy redirect will. All these do is change your URL's domain to a different one.

You could be using privacy redirect. But this is a fun do it yourself project to make fun of bad privacy disrespecting websites.

## WARNING!?@?!
These scripts will probably change maybe even break sometimes because instances of these alternative websites will break from user load causing servers to crash. This is why these websites have multiple instances. So at less a instance get's unmaintained or unuseable for some reason probably your prefered instance won't be used in these scripts

### NOT TO FEAR!
These scripts don't require coding knowledge to understand what they do. All you have to do to modify them is understand this.

1. Description of what the script does
```javascript
/////////////////////////////////////////////////////////////////////
//                                                                   /
// DESCRIPTION:                                                      /
// This is a file that after installing a greasemonkey extension can /
// be used to convert youtube.com to any invidious instance.         /
// NOTE: I might change this really often because instances may fail./
// variables.                                                        /
```
1. This is the license
```javascript
//                                                                   /
// LISCENSE INFO (A dedicated liscense file is in the repo.):        /
//      ALL THE CODE IN THIS REPOSITORY INCLUDING THIS FILE IS       /
// (C) Troler Jeans and Other Contributors 2021.                     /
// YOU CAN USE THIS FILE AND ANY OTHER FILE IN THIS REPOSITORY UNDER /
// THE TERMS OF GNU GENERAL PUBLIC LICENSE VERSION 3 OR ANY LATER    /
// VERSION. TO FIND THE FULL TEXT OF THE LICENSE GO TO THE GNU.ORG   /
// WEBSITE AT ( https://www.gnu.org/licenses/gpl-3.0.html ).         /
/////////////////////////////////////////////////////////////////////
```
1. Still commented in a place after that is a @name this is the name of the script.
```javascript
// ==UserScript==
// @name           YouTube to Invidous
```
2. Then there is a @namespace write that YOU made this script. If you make a PR with some interesting modification to the script I will try to keep your name and other contributers on it.
```javascript
// @namespace      Troler's Youtubvious
```
3. @match, these are a bunch of edge cases where you type a weird url. We don't want the weird url to make you go to the privacy disrespecting site so we list it as something we want the script to run on.
```javascript
// @match          http://youtube.com/*
// @match          https://youtube.com/*
// @match          http://www.youtube.com/*
// @match          https://www.youtube.com/*
// @run-at         document-start
```
4. Then there is a big block of code this where the majic happens. Just put the first link eg. <youtube.com> to something you want to replace in the second link eg. <vid.puffyan.us> .
```javascript
// ==/UserScript==
url = location.href
url = url.replace(/\bwww\.\b/, "")
url = url.replace("youtube.com","vid.puffyan.us")
location.href = url
```

I hope those that contribute and help maintaine these scripts have great times with them. As the web changes, so should we.
