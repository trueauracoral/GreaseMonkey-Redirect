/////////////////////////////////////////////////////////////////////
//                                                                   /
// DESCRIPTION:                                                      /
// This is a file that after installing a greasemonkey extension can /
// be used to convert twitter.com to any nitter instance.            /
// NOTE: I might change this really often because instances may fail./
// variables.                                                        /
//                                                                   /
// LISCENSE INFO (A dedicated liscense file is in the repo.):        /
//      ALL THE CODE IN THIS REPOSITORY INCLUDING THIS FILE IS       /
// (C) Troler Jeans and Other Contributors 2021.                     /
// YOU CAN USE THIS FILE AND ANY OTHER FILE IN THIS REPOSITORY UNDER /
// THE TERMS OF GNU GENERAL PUBLIC LICENSE VERSION 3 OR ANY LATER    /
// VERSION. TO FIND THE FULL TEXT OF THE LICENSE GO TO THE GNU.ORG   /
// WEBSITE AT ( https://www.gnu.org/licenses/gpl-3.0.html ).         /
/////////////////////////////////////////////////////////////////////
// ==UserScript==
// @name           Twitter to Nitter
// @namespace      Zera's userscripts
// @match          http://twitter.com/*
// @match          https://twitter.com/*
// @match          http://www.twitter.com/*
// @match          https://www.twitter.com/*
// @run-at         document-start
// ==/UserScript==
url = location.href
url = url.replace(/\bwww\.\b/, "")
url = url.replace("twitter.com","nitter.42l.fr")
location.href = url